import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Order from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'
import Deta from '@/components/user/MyUserDetail.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/home', component: Home, redirect: '/home/users',children: [
      {path: 'users', component: Users},
      {path: 'rights', component: Rights},
      {path: 'goods', component: Goods},
      {path: 'tables', component: Order},
      {path: 'systems', component: Settings},
      {path: 'userinfo/:id', component: Deta, props: true}
    ]}
  ]  
})
// 全局前置守卫
router.beforeEach(function (to,from,next){
  if(to.path === '/home'){
    const token = localStorage.getItem('token')
    if(token){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})

export default router