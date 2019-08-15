import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'menue-active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    path: '/',
    name: '首页',
    component: () => import('@/view/Index/index')
  },
  {
    path: '/category',
    name: '分类页',
    component: () => import('@/view/category/index')
  },
  {
    path: '/car',
    name: '购物车页',
    component: () => import('@/view/car/index')
  },
  {
    path: '/user',
    name: '用户页',
    component: () => import('@/view/user/index')
  }
  ]
})
