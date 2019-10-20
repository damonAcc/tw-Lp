const path = require('path')
const glob = require('glob')
const PAGE_PATH = path.resolve(__dirname, '../src/pages')

const isDev = process.env.NODE_ENV === 'development'
// const isSit = process.env.NODE_ENV === 'production' && process.env.VUE_APP_ISSIT === 'true'

const entryFilesSearch = () => {
  return glob.sync(PAGE_PATH + '/**/index.js').reduce((pre, cur) => {
    const pageIndexJs = path.relative(PAGE_PATH, cur)
    const name = path.dirname(pageIndexJs).replace(/\\/g, '/')
    pre[name] = { entry: cur }
    return pre
  }, {})
}

//修改 extract-css-loader 中 publicPath
const fixCssUrl = (config, baseUrl) =>
  ['css', 'less', 'stylus']
    .map(css => config.module.rule(css))
    .forEach(rule => {
      ['vue-modules', 'vue', 'normal-modules', 'normal']
        .map(type => rule.oneOf(type).use('extract-css-loader'))
        .map(loader =>
          loader.tap(option => {
            option.publicPath = baseUrl
          })
        )
    })

// const baseUrl = isDev ? '/' : isSit ? '/sit/ash/' : '/ash'

module.exports = {
  pages: entryFilesSearch(),
  fixCssUrl,
  // baseUrl
}
