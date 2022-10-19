// 用来请求mock接口的ajax

import axios from "axios"

const mockAjax = axios.create({
  baseURL: "/mock", // 地址前缀
  timeout: 10000 // 请求超时时间
})

mockAjax.interceptors.request.use((config) => {
  return config
})

mockAjax.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export default mockAjax
