
// 引入路由组件
import Home from '@/pages/Home/index.vue'
import Search from '@/pages/Search/index.vue'


export default [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/*', component: Home }
]
