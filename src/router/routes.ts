import type { RouteLocationNormalized } from 'vue-router'

// 设置一个包含路径对应关系的对象，当需要跳转到对应路径时，来的路径要符合其在对象对应的值
const allowPath = {
  'addcartsuccess': ['detail', 'search'],
  'pay': ['trade'],
  'paysuccess': ['pay'],
  'trade': ['cart'],
}
const returnFrom = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  // 判断来时的路由名称是否包含在目标路由的许可列表中
  const isPass = allowPath[to.name].indexOf(from.name) != -1 ? true : false
  if (!isPass) {
    // 这里根据官网的方法返回false无法中断路由跳转，而且会报错，所以读取from.path进行跳转回去
    // return false
    return { path: from.path }
  }
}

export default [
  // 使用meta配置路由元信息，控制footer显示与否
  // 通过component动态加载组件，加快访问速度
  {
    path: '/', name: 'home',
    component: () => import('@/pages/Home/index.vue'),
    meta: { showFooter: true, ishome: true }
  },
  {
    path: '/search/:keyword?', name: 'search',
    component: () => import('@/pages/Search/index.vue'),
    meta: { showFooter: true }
  },
  {
    path: '/detail/:skuId?', name: 'detail',
    component: () => import('@/pages/Detail/index.vue'),
    meta: { showFooter: true }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',

    component: () => import('@/pages/AddCartSuccess/index.vue'),
    meta: { showFooter: true },
    beforeEnter: [returnFrom]
  },
  {
    path: '/cart', name: 'cart',
    component: () => import('@/pages/Cart/index.vue'),
    meta: { showFooter: true }
  },
  {
    path: '/login', name: 'login',
    component: () => import('@/pages/Login/index.vue'),
    meta: { showFooter: false }
  },
  {
    path: '/register', name: 'register',
    component: () => import('@/pages/Register/index.vue'),
    meta: { showFooter: false }
  },
  {
    path: '/trade', name: 'trade',
    component: () => import('@/pages/Trade/index.vue'),
    meta: { showFooter: true },
    beforeEnter: [returnFrom]
  },
  {
    path: '/pay', name: 'pay',
    component: () => import('@/pages/Pay/index.vue'),
    meta: { showFooter: true },
    beforeEnter: [returnFrom]
  },
  {
    path: '/paysuccess', name: 'paysuccess',
    component: () => import('@/pages/PaySuccess/index.vue'),
    meta: { showFooter: true },
    beforeEnter: [returnFrom]
  },
  {
    path: '/center', name: 'center',
    component: () => import('@/pages/Center/index.vue'),
    meta: { showFooter: true },
    children: [
      {
        path: 'myorder',
        component: () => import('@/pages/Center/myOrder/index.vue')
      },
      {
        path: 'grouporder',
        component: () => import('@/pages/Center/groupOrder/index.vue')
      },
      { path: '/center', redirect: '/center/myorder' }
    ]
  },
  { path: '/:pathMatch(.*)', redirect: '/' } // 当上述路径均未匹配时则跳转到/
]
