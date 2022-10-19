import request from "./request";
import mockRequests from "./mockAjax"
import { config } from "process";

// 发出获取分类列表请求

export const reqCategoryList = () => request({ url: '/product/getBaseCategoryList', methods: 'get' })

export const reqSearchResult = () => request({ url: '/list', methods: 'post' })

// 获取轮播图数据请求
export const reqGetBannerList = () => mockRequests({ url: '/banners', methods: 'get' })

// 获取floor数据请求
export const reqGetFloorList = () => mockRequests({ url: '/floors', methods: 'get' })
