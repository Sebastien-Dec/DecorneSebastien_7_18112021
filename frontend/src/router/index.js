import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import NewPost from '../views/NewPost.vue'
import Home from '../views/Home.vue'
import Comment from '../views/Comment.vue'

Vue.use(VueRouter)

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
  },
  {
    path: '/comment',
    name: 'comment',
    component: Comment
  }
  
]

const router = new VueRouter({ routes })

export default router
