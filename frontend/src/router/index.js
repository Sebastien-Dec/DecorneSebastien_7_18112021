import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import NewPost from '../views/NewPost.vue'
import Home from '../views/HomePublication.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/signup',
    name:'signup',
    component: Signup
  },
  {
    path: '/newpost',
    name: 'newpost',
    component: NewPost
  },
  {
    path:'/home',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
