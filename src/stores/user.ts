import { defineStore } from "pinia"
import { ref } from "vue"
import { reqGetCode, reqUserRegister } from '@/api/index'

export const useUser = defineStore('user', () => {

  // 验证码
  // 一般来说验证码应该是发送到用户的手机上的，这里只是模拟用户已经收到了验证码，所以直接返回验证码
  const code = ref<number>()
  // 获取验证码
  const getCode = async (phone: number) => {
    // console.log(phone);
    let result = await reqGetCode(phone)
    if (result.code == 200) {
      code.value = result.data
      console.log(result);
    } else {
      return Promise.reject(new Error('failed'))
    }
  }

  // #region 注册功能
  const userRegister = async (user: object) => {
    console.log(user);
    let result = await reqUserRegister(user)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  }
  // #endregion

  return { code, getCode, userRegister }
})
