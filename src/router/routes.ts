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


export default [
  // 使用meta配置路由元信息，控制footer显示与否
  { path: '/', name: 'home', component: Home, meta: { showFooter: true, ishome: true } },
  { path: '/search/:keyword?', name: 'search', component: Search, meta: { showFooter: true } },
  { path: '/detail/:skuId?', name: 'detail', component: Detail, meta: { showFooter: true } },
  { path: '/addcartsuccess', name: 'addcartsuccess', component: AddCartSuccess, meta: { showFooter: true } },
  { path: '/cart', name: 'cart', component: Cart, meta: { showFooter: true } },
  { path: '/login', name: 'login', component: Login, meta: { showFooter: false } },
  { path: '/register', name: 'register', component: Register, meta: { showFooter: false } },
  { path: '/trade', name: 'trade', component: Trade, meta: { showFooter: true } },
  { path: '/pay', name: 'pay', component: Pay, meta: { showFooter: true } },
  { path: '/:pathMatch(.*)', redirect: '/' } // 当上述路径均未匹配时则跳转到/
]
