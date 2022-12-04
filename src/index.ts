/* eslint-disable @typescript-eslint/no-var-requires */
import _debug from 'debug'
import pkg from '../package.json'
const util = require('node:util')
const exec = util.promisify(require('node:child_process').exec)

const debug = _debug('pkg-desc:index')

export interface Options {
  version?: boolean
  description?: boolean
  docs?: boolean
}

async function queryNpm(name: string, queryStr: string) {
  const cmd = `npm view ${name} ${queryStr}`
  const { stdout, _stderr } = await exec(cmd)
  const res = stdout.trim().replace(/\s=/g, ':').split('\n')
  res.unshift(`name: ${name}`)
  return res
}

export async function getPkgInfo(options: Options = {}) {
  const infoList: any[] = []
  const queryStr = `${options.version ? 'version' : ''} ${options.description ? 'description' : ''} ${options.docs ? 'homepage' : ''}`.trim()

  if (queryStr.length === 0)
    return infoList

  for (const [name, _] of Object.entries(pkg.dependencies ?? {})) {
    const pro = await queryNpm(name, queryStr)
    infoList.push(pro)
  }

  for (const [name, _] of Object.entries(pkg.devDependencies ?? {})) {
    const pro = await queryNpm(name, queryStr)
    infoList.push(pro)
  }

  const res = await Promise.all(infoList)
  return res
}
