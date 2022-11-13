import request from "./request";
import mockRequests from "./mockAjax"

// 发出获取分类列表请求

export const reqCategoryList = () => request({ url: '/product/getBaseCategoryList', method: 'get' })

// 获取轮播图数据请求
export const reqGetBannerList = () => mockRequests({ url: '/banners', method: 'get' })

// 获取floor数据请求
export const reqGetFloorList = () => mockRequests({ url: '/floors', method: 'get' })

// 获取搜索结果数据
export const reqSearchResult = (params) => request({ url: '/list', method: 'post', data: params })

// 获取商品详情数据
export const reqGoodsInfo = (skuId) => request({ url: `/item/${skuId}`, method: 'get' })
