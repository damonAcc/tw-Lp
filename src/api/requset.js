import axios from 'axios'
// import { login } from './app'
import Cookies from 'js-cookie'

export const request = axios.create({
  timeout: 5000, // 请求超时时间
})

export const requestL = axios.create({
  timeout: 60000, // 请求超时时间
  withCredentials: true
})

  ;[requestL, request].map(req =>
    req.interceptors.request.use(config => {

      const token = Cookies.get('token') || sessionStorage.getItem('token')
      token && (config.headers.token = token)
      return config
    })
  )

// 请求鉴权调登录
requestL.interceptors.response.use(response => {
  if (response.data.status === '9999') {
    //login()
  } else {
    return response
  }
})
