const path = require('path')
const utils = require('./config/utils')
const vueConfig = {
  baseUrl: utils.baseUrl,
  assetsDir: 'assets',
  pages: utils.pages ,
  // Webpack 链式配置
  configureWebpack(config) {
    // 全局引入
    Object.keys(config.entry).forEach(name =>
      config.entry[name].unshift('./src/main.js')
    )
  },
  lintOnSave: true,
  devServer: {
    // proxy: 'http://10.83.50.*:1001'
  }
}

module.exports = vueConfig
