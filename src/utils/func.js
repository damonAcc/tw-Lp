
// 获取 queryString
export const getQueryString = key => {
  const searchObj = document.location.search
    .slice(1)
    .split('&')
    .reduce((pre, cur) => {
      if (cur) {
        const keyVal = cur.split('=')
        pre[keyVal[0]] = keyVal[1] || ''
      }
      return pre
    }, {})

  return key ? searchObj[key] : searchObj
}

// 设置utm字段
export const setUtmFields = () => {
  ['utm_source', 'utm_medium', 'utm_campaign'].forEach(item => {
    const searchObj = getQueryString()
    if (searchObj[item]) {
      localStorage.setItem(item, searchObj[item])
    }
  })
}

// 获取utm字段
export const getUtmFields = () => {
  const searchObj = getQueryString()

  return ['utm_source', 'utm_medium', 'utm_campaign'].reduce((pre, cur) => {
    const utmVal = searchObj[cur] || localStorage.getItem(cur)
    if (utmVal) {
      pre[cur] = utmVal
    }
    return pre
  }, {})
}

// 格式化日期
export const formatDate = (date = Date.now(), fmt = 'yyyy-MM-dd hh:mm:ss') => {
  date = new Date(date)
  let o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  for (let k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
  return fmt
}

// 加载 js
let scriptCacheMap = {}
export const loadScript = (src, wrapperStr) => {
  if (!Array.isArray(src)) {
    src = [src]
  }
  let wrapper = document[wrapperStr] || document.body
  console.log(wrapper, src)
  function loadOne(src) {
    if (scriptCacheMap[src]) return scriptCacheMap[src]
    const scriptNode = document.createElement('script')
    scriptNode.src = src
    scriptCacheMap[src] = new Promise(resolve => {
      scriptNode.onload = () => resolve()
    })
    wrapper.appendChild(scriptNode)
    return scriptCacheMap[src]
  }

  return Promise.all(src.map(loadOne))
}


export const loadScriptString = (code, wrapperStr) => {
  let wrapper = document[wrapperStr] || document.body
  let script = document.createElement("script");
  script.type = "text/javascript";
  try {
      script.appendChild(document.createTextNode(code));
  } catch (ex) {
      script.text = code;
  }
  wrapper.appendChild(script);
}
// loadScriptString("function sayHi() {alert('hi');}");