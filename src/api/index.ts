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

// 添加商品到购物车（或者更新购物车中商品数量）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => request({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

// 获取购物车列表数据
export const reqCartList = () => request({ url: '/cart/cartList', method: 'get' })

// 删除购物车商品
export const reqDeleteCartById = (skuId) => request({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })
