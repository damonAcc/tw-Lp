// 环境变量 isSit isPrd isWx isApp 


const UA = typeof window !== 'undefined' && navigator.userAgent.toLowerCase()

export const isSit = process.env.VUE_APP_ISSIT
export const isDEV = process.env.NODE_ENV === 'development'

export const isWechat = UA.indexOf('micromessenger') > -1 && UA.indexOf('wxwork') === -1 
export const isAndroid = UA.indexOf('android') > -1
export const isIOS = /iphone|ipad|ipod|ios/.test(UA)