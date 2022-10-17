import { reqCategoryList } from '@/api/index'
import { defineStore } from "pinia"
import { reactive, ref } from "vue"

export const useHome = defineStore('home', () => {

  // 商品分类列表数据
  let categoryList = reactive([])
  async function getCategoryList(this: any) {
    let result: any = await reqCategoryList();
    if (result.code === 200) {
      this.$patch(this.categoryList = result.data)
      console.log('await:', this);
    }
    console.log('store: ', categoryList);
  }

  // 轮播图数据

  // Floor数据
  return { categoryList, getCategoryList }
})

