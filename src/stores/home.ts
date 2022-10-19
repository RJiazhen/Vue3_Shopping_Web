import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api/index'
import { defineStore } from "pinia"
import { reactive, ref } from "vue"

export const useHome = defineStore('home', () => {

  // 商品分类列表数据
  let categoryList = reactive([])
  async function getCategoryList(this: any) {
    let result: any = await reqCategoryList();
    if (result.code === 200) {
      this.$patch(this.categoryList = result.data)
    }
  }

  // 轮播图数据
  let bannerList = reactive([])
  async function getBannerList(this: any) {
    let result: any = await reqGetBannerList();
    if (result.code === 200) {
      this.$patch(this.bannerList = result.data)
    }
  }
  // Floor数据
  let floorList = reactive([])
  async function getFloorList(this: any) {
    let result: any = await reqGetFloorList();
    if (result.code === 200) {
      this.$patch(this.floorList = result.data)
    }
  }

  return { categoryList, getCategoryList, bannerList, getBannerList, floorList, getFloorList }
})

