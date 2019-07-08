import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Guide from './views/Guide.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/guide',
    },
    {
      path: '/guide',
      component: Guide
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/watch',
      component: () => import('./views/Watch.vue')
    },
    {
      path: '/sing',
      component: () => import('./views/Sing.vue')
    },
    {
      path: '/gg',
      component: () => import('./views/Gg.vue')
    },
  ]
})
