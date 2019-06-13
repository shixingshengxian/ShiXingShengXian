import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ho',
      component:()=>import('./components/Tab/Home.vue')
    },  {
      path: '/home',
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
      path: '/login',
      name: 'login',
      component:()=>import('./components/Tab/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component:()=>import('./components/Tab/Register.vue')
    },
    {
      path: '/goodslist',
      name: 'goodslist',
      component:()=>import('./components/GoodsList/GoodsList.vue'),
      
    },
    {path:'/goodslist/goodsdetail',name:'goodsdetail', component:()=>import('./components/GoodsList/GoodsDetail.vue')}
   
  ]
})
