import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Members from '../views/Members.vue'
import News from '../views/News.vue'
import Events from '../views/Events.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/members',
    name: 'members',
    component: Members
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router