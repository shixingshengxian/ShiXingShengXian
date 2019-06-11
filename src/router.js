import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('./components/Tab/Home.vue')
    }, {
      path: '/sort',
      name: 'sort',
      component:()=>import('./components/Tab/Sort.vue')
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component:()=>import('./components/Tab/ShopCart.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component:()=>import('./components/Tab/Mine.vue')
    },
    {
      path: '/eat',
      name: 'eat',
      component:()=>import('./components/Tab/Eat.vue')
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('./components/Tab/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component:()=>import('./components/Tab/Register.vue')
    },
  ]
})
