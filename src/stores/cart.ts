import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { reqCartList } from "@/api/index"
import type { AxiosResponse } from "axios"

export const useCart = defineStore('cart', () => {
  let reqCartResult = ref<cartListResult>()
  let cartInfoList = computed(() => reqCartResult.value?.data[0]?.cartInfoList || [])
  // 获取购物车信息
  const getCartList = async () => {
    let result = await reqCartList();
    if (result.code == 200) {
      reqCartResult.value = result
    }
  }

  return { getCartList, cartInfoList }
})
