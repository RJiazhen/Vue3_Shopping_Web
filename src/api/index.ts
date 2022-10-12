import request from "./request";


// 暴露基本商品分类的请求函数
// 发起axios请求，并返回Promise对象
export const reqCategoryList = () => request({ url: '/product/getBaseCategoryList', methods: 'get' })

