## path

./src vue 多页

## 构建
vue 为多页应用  

## src 目录
- main.js 全局引入 全局配置
- api 接口请求
- assets 图片 icon 等资源
- common 公用文件
- components vue 组件
- pages 页面每一个index.js 会被打包为页面入口, 页面路径为 dirname eg: src/pages/a/b/index.js => a/b.html
- plugins 挂载于 Vue 下的方法 命名以 $ 开头 eg: Vue.$toast()
- utils 工具函数
  
## 注意