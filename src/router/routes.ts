// 引入路由组件
import Home from '@/pages/Home/index.vue'
import Search from '@/pages/Search/index.vue'
import Detail from "@/pages/Detail/index.vue"
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import AddCartSuccess from "@/pages/AddCartSuccess/index.vue"
import Cart from "@/pages/Cart/index.vue"
import Trade from "@/pages/Trade/index.vue"
import Pay from "@/pages/Pay/index.vue"
import PaySuccess from "@/pages/PaySuccess/index.vue"
import Center from "@/pages/Center/index.vue"
// Center下面的二级路由
import myOrder from "@/pages/Center/myOrder/index.vue"
import groupOrder from "@/pages/Center/groupOrder/index.vue"
import type { RouteLocationNormalized } from 'vue-router'

// 设置一个包含路径对应关系的对象，当需要跳转到对应路径时，来的路径要符合其在对象对应的值
const allowPath = {
  '/addcartsuccess': '/detail',
  '/pay': '/cart',
  '/paysuccess': '/pay',
  '/trade': '/cart',
}
const returnFrom = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  if (from.path != allowPath[to.path]) {
    // 这里根据官网的方法返回false无法中断路由跳转，而且会报错，所以读取from.path进行跳转回去
    // return false
    return { path: from.path }
  }
}

export default [
  // 使用meta配置路由元信息，控制footer显示与否
  { path: '/', name: 'home', component: Home, meta: { showFooter: true, ishome: true } },
  { path: '/search/:keyword?', name: 'search', component: Search, meta: { showFooter: true } },
  { path: '/detail/:skuId?', name: 'detail', component: Detail, meta: { showFooter: true } },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: { showFooter: true },
    beforeEnter: [returnFrom]
  },
  { path: '/cart', name: 'cart', component: Cart, meta: { showFooter: true } },
  { path: '/login', name: 'login', component: Login, meta: { showFooter: false } },
  { path: '/register', name: 'register', component: Register, meta: { showFooter: false } },
  { path: '/trade', name: 'trade', component: Trade, meta: { showFooter: true }, beforeEnter: [returnFrom] },
  { path: '/pay', name: 'pay', component: Pay, meta: { showFooter: true }, beforeEnter: [returnFrom] },
  { path: '/paysuccess', name: 'paysuccess', component: PaySuccess, meta: { showFooter: true }, beforeEnter: [returnFrom] },
  {
    path: '/center', name: 'center', component: Center, meta: { showFooter: true },
    children: [
      { path: 'myorder', component: myOrder },
      { path: 'grouporder', component: groupOrder },
      { path: '/center', redirect: '/center/myorder' }
    ]
  },
  { path: '/:pathMatch(.*)', redirect: '/' } // 当上述路径均未匹配时则跳转到/
]
