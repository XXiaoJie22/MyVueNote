import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/MyHome.vue'
import User from '@/views/users/MyUsers.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User }
]

const router = new VueRouter({
  routes
})

export default router
