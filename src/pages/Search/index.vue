<template>
  <div class="main">
    <div class="py-container">
      <!-- 面包屑 -->
      <Bread :searchParams="searchParams" @removeCategoryName="removeCategoryName" @clearKeyword="clearKeyword"
        @removeTrademark="removeTrademark" @removeProp="removeProp"></Bread>
      <!-- 选择器 -->
      <Selector @trademarkHandler="trademarkHandler" @selectAttr="selectAttr"></Selector>
      <!--details-->
      <div class="details clearfix">
        <!-- 排序选择器 -->
        <Navbar :orderOption="orderOption" :orderDirection="orderDirection" @orderHandler="orderHandler"></Navbar>
        <!-- 商品列表 -->
        <div class="goods-list">
          <ul>
            <Good v-for="(good, index) in goodsList" :key="good.id" :imgSrc="good.defaultImg" :title="good.title"
              :price="good.price" :goodId = 'good.id'></Good>
          </ul>
        </div>
        <div class="page">
          <Pagination :pageNo="pageNo" :pageSize="pageSize" :continues="5" :total="total" :totalPages="totalPages" @getPageNo="getPageNo">
          </Pagination>
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
// #region 引入和定义全局变量
import Bread from "./Bread/index.vue"
import Selector from "./Selector/index.vue"
import Navbar from "./Navbar/index.vue"
import Good from "./Good/index.vue"
import HotSaleGood from "./HotSaleGood/index.vue"
import Pagination from "@/components/Pagination/index.vue"
// import Pagination from "@/component/Pagination/index.vue"

import { useSearch } from "@/stores/search"
import { computed } from "@vue/reactivity"
import { onBeforeMount, onMounted, watch, reactive, getCurrentInstance } from "vue"
import { useRoute, useRouter } from "vue-router"

const search = useSearch()
const route = useRoute()
const router = useRouter()
// 全局事件总线
const $bus = getCurrentInstance().appContext.config.globalProperties.$bus
// #endregion

// #region 定义搜索参数和获取搜索结果
// 默认搜索参数
let searchParams = reactive({
  "category1Id": undefined, // 一级分类id
  "category2Id": undefined, // 二级分类id
  "category3Id": undefined, // 三级分类id
  "categoryName": undefined, // 分类名字
  "keyword": undefined, // 关键字
  "order": '1:desc', // 排序
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

// #endregion

// #region 选择器部分
// 点击品牌选项
const trademarkHandler = (trademark) => {
  searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`
  search.getSearchResult(searchParams)
  if (route.query) {
    router.push({ name: 'search', query: route.query })
  }
}
// 点击属性选项
const selectAttr = (attrId, attrName, attrValue) => {
  const prop = `${attrId}:${attrValue}:${attrName}`
  // 只有当数组中没有这个属性时才插入该属性
  if (searchParams.props.indexOf(prop) == -1) searchParams.props.push(prop)
  search.getSearchResult(searchParams)
}

// 排序器
const orderOption = computed(() => searchParams.order.split(':')[0])
const orderDirection = computed(() => searchParams.order.split(':')[1])
// 点击排序器
const orderHandler = (newOrderOption) => {
  // 如果是新的排序按钮，则默认是降序
  if (newOrderOption != orderOption.value) {
    searchParams.order = `${newOrderOption}:desc`
  }
  else {
    // 如果是重复点击“综合”，则不变
    if (newOrderOption === '1') {
      return
    }
    // 如果是重复点击其他按钮，则只改变升降序
    searchParams.order = `${orderOption.value}:${orderDirection.value === 'desc' ? 'asc' : 'desc'}`
  }
  search.getSearchResult(searchParams)
}

// #endregion

// #region 面包屑部分
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
  searchParams.keyword = undefined

  search.getSearchResult(searchParams)
  if (route.query) {
    router.push({ name: 'search', query: route.query })
  }
  // 清除输入框的关键字
  $bus.emit('clearKeyword')
}

// 清除品牌信息
const removeTrademark = () => {
  searchParams.trademark = undefined
  search.getSearchResult(searchParams)
}

// 清除属性筛选
const removeProp = (index) => {
  searchParams.props.splice(index, 1)
  search.getSearchResult(searchParams)
}
// #endregion

// #region 分页器部分
const pageNo = computed((): number => search.searchResult.pageNo) // 当前页码
const total = computed((): number => search.searchResult.total) // 总商品数
const pageSize = computed((): number => search.searchResult.pageSize) // 每页商品数
const totalPages = computed((): number => search.searchResult.totalPages) // 总页数
// 获取点击的页码
const getPageNo = (pageNo)=>{
  searchParams.pageNo = pageNo
  search.getSearchResult(searchParams)
}
// #endregion

</script>

<style lang="scss">
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .details {
      margin-bottom: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .goods-list {
        width: 100%;
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;
        }
      }

      .page {
        margin: auto;
        width: 100%;
        height: 66px;
        overflow: hidden;
        // float: right;
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
