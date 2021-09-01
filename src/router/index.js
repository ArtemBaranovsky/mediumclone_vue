// import Vue from 'vue'   // not used in Vue 3 init
// import VueRouter from 'vue-router'  // not used in Vue 3 init
import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home'
import Register from "@/views/Register";

// Vue.use(VueRouter)   // not used in Vue 3 init

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
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
