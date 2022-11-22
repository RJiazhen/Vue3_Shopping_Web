import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { reqAddressInfo, reqOrderInfo } from "@/api/index"

export const useTrade = defineStore('trade', () => {
  let reqCartResult = ref<cartListResult>()
  let cartInfoList = computed(() => reqCartResult.value?.data[0]?.cartInfoList || [])
  // 获取购物车信息
  const addressList = ref<Array<address>>()
  const getAddress = async () => {
    let result = await reqAddressInfo();
    if (result.code == 200) {
      console.log(result);
      addressList.value = result.data
      console.log('address', addressList);
    } else {
      console.log(result);
    }
  }

  // 获取商品清单信息
  const orderInfo = ref<orderInfo>()
  const getOrderInfo = async () => {
    let result = await reqOrderInfo();
    if (result.code == 200) {
      orderInfo.value = result.data
      console.log('order', orderInfo);
    }
  }

  return { addressList, getAddress, orderInfo, getOrderInfo }
})
