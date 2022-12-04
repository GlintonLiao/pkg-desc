<h1 align="center">pkg-desc</h1>


<p align="center">
List all packages details
</p>
<p align="center">
<a href="https://www.npmjs.com/package/pkg-desc"><img src="https://img.shields.io/npm/v/pkg-desc?color=a1b858&label=" alt="NPM version"></a>
</p>

## Usage

```bash
npx pkg-desc
```

or

```bash
npm i -g pkg-desc
pkg-desc --version --author
```

And you can get:

![example img](https://user-images.githubusercontent.com/37015336/205476655-57b883b3-135c-4ecd-b046-4e881b201d4d.jpg)

## Options

```
Options:
  -v, --version     Show version (default: false)
  -a, --author      Show author (default: false)
  --no-description  Do not show description (default: true)
  --no-docs         Do not show docs (default: true)
  -h, --help        Display this message 
```

If any of the conditions fail, a `process.exit(1)` will be returned and prevent you from continuing the following workflows.

## License

MIT
