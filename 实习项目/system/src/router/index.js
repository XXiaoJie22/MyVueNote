import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Welcome from '@/views/welcome/welcome.vue'
import GetUser from '@/views/user/getUser.vue'
import Update from '@/views/user/update.vue'
import Success from '@/views/success/success.vue'

Vue.use(VueRouter)

const routes = [
  { path:'/',redirect: '/login'},
  { path: '/home',name: 'home',component: Home,redirect:'/home/welcome', children: [
    { path: 'welcome',component: Welcome},
    { path: 'getUser',component: GetUser},
    { path: 'updateUser',component: Update},
    { path: 'success', component: Success}
  ]},
  { path: '/login' , component: Login}
]

const router = new VueRouter({
  routes
})


// 设置全局前置守卫，防止不登录直接进入主页面的情况
router.beforeEach((to,from,next) => {
  if(to.path === '/home'){
    // 读取只有登录了才存在的token
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
