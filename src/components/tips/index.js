import Vue from 'vue'
import TipsComponent from './Tips.vue'

const TipsConstructor = Vue.extend(TipsComponent) // 直接将Vue组件作为Vue.extend的参数

let tId = 1

const Tips = (options) => {
  let id = 'tips-' + tId++

  const TipsInstance = new TipsConstructor({
    data: {
      options: options
    }
  }) // 实例化一个带有options内容的Tips

  console.log(TipsInstance)
  TipsInstance.id = id
  TipsInstance.vm = TipsInstance.$mount() // 挂载但是并未插入dom，是一个完整的Vue实例
  TipsInstance.vm.visible = true
  TipsInstance.dom = TipsInstance.vm.$el
  document.body.appendChild(TipsInstance.dom) // 将dom插入body
  //TipsInstance.dom.style.zIndex = tId + 1001 // 后插入的Tips组件z-index加一，保证能盖在之前的上面
  return TipsInstance.vm
}

export default {
  install: Vue => {
    Vue.prototype.$tips = Tips // 将Tips组件暴露出去，并挂载在Vue的prototype上
  }
}