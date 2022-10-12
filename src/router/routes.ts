// 引入路由组件
import Home from '@/pages/Home/index.vue'
import Search from '@/pages/Search/index.vue'


export default [
  { path: '/', component: Home, alias: '/home' },
  { path: '/search', component: Search },
  { path: '/:pathMatch(.*)', redirect: '/' } // 当上述路径均未匹配时则跳转到/
]
