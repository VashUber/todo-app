import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/views/Main";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Important',
    component: Main
  },
  {
    path: '/daily',
    name: 'Daily',
    component: Main
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: "sidebar__link--active"
})

export default router
