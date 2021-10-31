import Vue from 'vue'
import VueRouter from 'vue-router'
import Important from "@/views/Important";
import Daily from "@/views/Daily";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Important',
    component: Important
  },
  {
    path: '/daily',
    name: 'Daily',
    component: Daily
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: "sidebar__link--active"
})

export default router
