import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  //   mode: 'history',
  linkActiveClass: 'menue-active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('@/view/Index/index')
    },
    {
      path: '/category',
      name: '分类页',
      component: () => import('@/view/Category/index')
    },
    {
      path: '/car',
      name: '购物车页',
      component: () => import('@/view/Car/index')
    },
    {
      path: '/user',
      name: '用户页',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录才能进入的
      },
      component: () => import('@/view/User/index')
    },
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/view/Login/index')
    }
  ]
})
