import { defineStore } from "pinia"
import { computed, reactive, ref } from "vue"
import { reqGoodsInfo } from '@/api/index'

export const useDetail = defineStore('detail', () => {

  // 产品信息
  let goodsInfo = ref<goodsInfo>()
  // 获取产品信息
  async function getGoodsInfo(this: any, skuId) {
    let result: any = await reqGoodsInfo(skuId);
    if (result.code === 200) {
      this.$state.goodsInfo = result.data
    }
  }

  // 使用计算属性提前简化相应的值
  // 分类信息   使用?.运算符配合||保证不会因为还未获得数据而报错
  const categoryView = computed(() => {
    return goodsInfo.value?.categoryView || <goodsInfo["categoryView"]>{}
  })
  // 商品信息
  const skuInfo = computed(() => goodsInfo.value?.skuInfo || <goodsInfo["skuInfo"]>{})
  // 售卖属性
  const spuSaleAttrList = computed(() => goodsInfo.value?.spuSaleAttrList || <goodsInfo["spuSaleAttrList"]>[])
  
  return { goodsInfo, getGoodsInfo, categoryView, skuInfo, spuSaleAttrList }
})

