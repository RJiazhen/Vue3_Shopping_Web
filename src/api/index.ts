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

// 修改购物车商品选中状态
export const reqUpdateCheckedById = (skuId, isChecked) => request({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

// 获取验证码
export const reqGetCode = (phone) => request({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

// 提交注册
export const reqUserRegister = (data) => request({ url: '/user/passport/register', data, method: 'post' })

// 提交登录
export const reqUserLogin = (data) => request({ url: '/user/passport/login', data, method: 'post' })

// 获取用户信息
export const reqUserInfo = () => request({ url: '/user/passport/auth/getUserInfo', method: 'get' })

// 退出登录
export const reqLogout = () => request({ url: '/user/passport/logout', method: 'get' })

// 获取用户地址信息
export const reqAddressInfo = () => request({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

// 获取商品清单
export const reqOrderInfo = () => request({ url: '/order/auth/trade', method: 'get' })
