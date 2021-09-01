// import Vue from 'vue'   // not used in Vue 3 init
// import VueRouter from 'vue-router'  // not used in Vue 3 init
import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

// Vue.use(VueRouter)   // not used in Vue 3 init

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// Vue 3 init
const router = createRouter({
  routes,
  history: createWebHistory()
})

// const router = new VueRouter({   // not used in Vue 3 init
//   routes
// })

export default router
