import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import NewPost from '../views/NewPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/signup',
    name:'Signup',
    component: Signup
  },
  {
    path: '/newpost',
    name: 'NewPost',
    component: NewPost
  }
]

const router = new VueRouter({ routes })

export default router
