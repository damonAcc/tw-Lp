import { isAndroidApp, isIOSApp } from '@/common/env'

const toast = msg => {
  if (isAndroidApp) {
    window.mobile.showToast(msg)
  } else if (isIOSApp) {
    window.webkit.messageHandlers.showToast.postMessage(msg)
  } else {
    console.log('toast',msg)
  }
}

export default {
  install(Vue) {
    Vue.prototype.$toast = toast
  }
}
