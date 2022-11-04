import { defineStore } from "pinia"
import { reactive, ref } from "vue"
import { reqSearchResult } from '@/api/index'

export const useSearch = defineStore('search', () => {

  // 获取搜索结果
  let searchResult = reactive({})
  async function getSearchResult(this: any) {
    let result: any = await reqSearchResult({});
    if (result.code === 200) {
      this.$patch(this.searchResult = result.data)
    }
  }

  return {searchResult, getSearchResult}
})
