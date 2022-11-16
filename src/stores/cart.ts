import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api/index"

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

  // 删除购物车商品
  const deleteCartListBySkuId = async (skuId: number) => {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('falied'))
    }
  }

  //修改商品选中状态
  const updateCheckedById =async (skuId:number, isChecked) => {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('falied'))
    }
  }
  return { getCartList, cartInfoList, deleteCartListBySkuId, updateCheckedById }
})
