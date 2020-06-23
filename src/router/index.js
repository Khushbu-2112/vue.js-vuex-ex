import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home'
import Menu from '../components/menu'
import data from '../components/data'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/vue.js-vuex-ex/',//for github demo
      redirect: 'home',
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/about',
      name: 'data',
      component: data
    },
    {
      path: '*',
      redirect: 'home'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
