// 对axios进行二次封装
import axios from 'axios'

export const request = axios.create({
  baseURL:"/api", // 配置基础路径，后续写路径时不需要重复写
  timeout: 5000, // 设置请求超时时间5s
})

// 请求拦截器，在请求发出前进行一些事
request.interceptors.request.use((config) =>{
  // 返回配置对象，其中有header请求头这个属性
  return config
})

// 响应拦截器
request.interceptors.response.use(
  // 成功时的回调函数
  (res) =>{
  return res.data
},
  // 失败时的回调函数
(error) =>{
  return Promise.reject(new Error('faile'))
})
export default request;
