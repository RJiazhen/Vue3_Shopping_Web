<template>
  <div class="main">
    <div class="py-container">
      <Bread :categoryName="searchParams.categoryName" @removeCategoryName="removeCategoryName"
        :keyword="searchParams.keyword" @clearKeyword="clearKeyword"></Bread>
      <Selector></Selector>
      <!--details-->
      <div class="details clearfix">
        <Navbar></Navbar>
        <!-- 商品列表 -->
        <div class="goods-list">
          <ul>
            <Good v-for="(good, index) in goodsList" :key="good.id" :imgSrc="good.defaultImg" :title="good.title"
              :price="good.price"></Good>
          </ul>
        </div>
        <div class="fr page">
          <Pagination></Pagination>
        </div>
      </div>
      <!--hotsale-->
      <div class="clearfix hot-sale">
        <h4 class="title">热卖商品</h4>
        <div class="hot-list">
          <ul class="yui3-g">
            <HotSaleGood></HotSaleGood>
            <HotSaleGood></HotSaleGood>
            <HotSaleGood></HotSaleGood>
            <HotSaleGood></HotSaleGood>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Bread from "./Bread/index.vue"
import Selector from "./Selector/index.vue"
import Navbar from "./Navbar/index.vue"
import Good from "./Good/index.vue"
import Pagination from "./Pagination/index.vue"
import HotSaleGood from "./HotSaleGood/index.vue"

import { useSearch } from "@/stores/search"
import { computed } from "@vue/reactivity"
import { onBeforeMount, onMounted, watch, reactive, getCurrentInstance } from "vue"
import { useRoute, useRouter } from "vue-router"

const search = useSearch()
const route = useRoute()
const router = useRouter()
// 全局事件总线
const $bus = getCurrentInstance().appContext.config.globalProperties.$bus

// 默认搜索参数
let searchParams = reactive({
  "category1Id": undefined, // 一级分类id
  "category2Id": undefined, // 二级分类id
  "category3Id": undefined, // 三级分类id
  "categoryName": undefined, // 分类名字
  "keyword": undefined, // 关键字
  "order": undefined, // 排序
  "pageNo": 1, // 页码
  "pageSize": 3, // 每页展示数据个数
  "props": [], // 商品属性参数
  "trademark": undefined // 品牌
})

// 挂载页面时获取搜索结果
onBeforeMount(() => {
  Object.assign(searchParams, route.query, route.params) //设置搜索参数
})
onMounted(() => {
  search.getSearchResult(searchParams)
})
// route更新时重新获取搜索结果
watch(route, (route) => {
  Object.assign(searchParams, route.query, route.params)
  search.getSearchResult(searchParams)
  // 之所以设置为undefined而不是''是因为undefined的字段不会被发送给服务器，节省带宽
  searchParams.category1Id = undefined
  searchParams.category2Id = undefined
  searchParams.category3Id = undefined
})

// 商品列表数据
let goodsList = computed(() => search.searchResult.goodsList || [])


// 面包屑部分
// 清除分类
const removeCategoryName = () => {
  searchParams.category1Id = undefined
  searchParams.category2Id = undefined
  searchParams.category3Id = undefined
  searchParams.categoryName = undefined

  search.getSearchResult(searchParams)
  // 如果路由中有params参数，则需要带上，以防止路径不正确
  if (route.params) {
    router.push({ name: 'search', params: route.params })
  }
}
// 清除关键字
const clearKeyword = () => {
  console.log('clear');
  searchParams.keyword = undefined

  search.getSearchResult(searchParams)
  if (route.query) {
    router.push({ name: 'search', query: route.query })
  }
  console.log('search', $bus);
  // 清除输入框的关键字
  $bus.emit('clearKeyword')
}
</script>

<style lang="scss">
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .details {
      margin-bottom: 5px;


      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;


      }
    }

    .hot-sale {
      margin-bottom: 5px;
      border: 1px solid #ddd;

      .title {
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        border-bottom: 1px solid #ddd;
        background: #f1f1f1;
        color: #333;
        margin: 0;
        padding: 5px 0 5px 15px;
      }

      .hot-list {
        padding: 15px;

        ul {
          display: flex;


        }
      }
    }
  }
}
</style>
