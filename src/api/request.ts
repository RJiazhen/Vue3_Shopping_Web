// 对axios进行二次封装
import axios from 'axios'
import { useDetail } from "@/stores/detail"
import { useUser } from "@/stores/user"
export const request = axios.create({
  baseURL: "/api", // 配置基础路径，后续写路径时不需要重复写
  timeout: 5000, // 设置请求超时时间5s
})

// 请求拦截器，在请求发出前进行一些事
request.interceptors.request.use((config) => {
  // 注意这里必须在pinia已经挂载在app上之后再获取store对象，否则会报错
  const detail = useDetail()
  // 返回配置对象，其中有header请求头这个属性
  // 如果已经有uuid_token了，那就添加到头部的对应字段
  if (detail.uuid_token) {
    config.headers.userTempId = detail.uuid_token
  }
  // 如果已经有token了，则也需要携带token
  const user = useUser()
  if (user.token) {
    config.headers.token = user.token
  }
  return config
})

// 响应拦截器
request.interceptors.response.use(
  // 成功时的回调函数
  (res) => {
    return res.data
  },
  // 失败时的回调函数
  (error) => {
    return Promise.reject(new Error('faile'))
  })
export default request;
