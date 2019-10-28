import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/components',
    name: 'components',
    component: () => import(/* webpackChunkName: "components" */ '../views/Components.vue')
  },
  {
    path: '/components/motherboard',
    name: 'motherboard',
    component: () => import(/* webpackChunkName: "motherboard" */ '../views/components/Motherboard.vue')
  },
  {
    path: '/why',
    name: 'why',
    component: () => import(/* webpackChunkName: "components" */ '../views/Why.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
