import {v4 as uuidv4} from "uuid"
// 返回一个随机字符串，且每次执行都不能发生变化，用来持久存储游客身份
export const getUUID = () => {
  // 先尝试从本地存储获取
  let uuid_token = localStorage.getItem('UUIDTOKEN')
  // 如果本地存储没有再生成，并且存储在本地
  if(!uuid_token){
    uuid_token = uuidv4()
    localStorage.setItem('UUIDTOKEN', uuid_token)
  }
  return uuid_token
}
