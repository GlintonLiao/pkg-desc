import cac from 'cac'
import chalk from 'chalk'
import { getPkgInfo } from './index'

const cli = cac('pkg-desc')

cli
  .option('-v, --version', 'Show version', { default: false })
  .option('-a, --author', 'Show Author', { default: false })
  .option('--no-description', 'Do not show description')
  .option('--no-docs', 'Do not show docs')
  .help()

const parsed = cli.parse()

async function main() {
  console.log(chalk.bold('Loading...'))
  const pkgInfo = await getPkgInfo(parsed.options)

  if (pkgInfo == null) {
    console.log('No package.json found')
    process.exit(0)
  } else {
    pkgInfo.forEach((info: string[]) => {
      info.forEach((element) => {
        const idx = element.indexOf(':')
        const key = element.substring(0, idx)
        const value = element.substring(idx + 1).trim()
        console.log(chalk.bold(key), chalk.yellow(value))
      })
      console.log('----------------')
    })
  }
  process.exit(0)
}

main()
