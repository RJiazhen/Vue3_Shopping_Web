import { defineStore } from "pinia"
import { ref } from "vue"
import { reqSearchResult } from '@/api/index'

export const useSearch = defineStore('search', () => {

  // 获取搜索结果
  const searchResult: any = ref({})
  async function getSearchResult(this: any, searchParams = {}) {
    let result: any = await reqSearchResult(searchParams);
    if (result.code === 200) {
      this.$state.searchResult = result.data
    }
  }

  // 商品列表
  // 这里使用computed无法正常更新变量的值，后续考虑使用选项式API的写法再试一遍
  // let goodsList = computed(() => {
  //   console.log('re', searchResult);
  //   console.log(searchResult.goodsList);
  //   return searchResult.goodsList
  // })

  // //商标列表
  // const trademarkList = computed(() => {
  //   return searchResult.trademarkList
  // })
  return { searchResult, getSearchResult }
})
