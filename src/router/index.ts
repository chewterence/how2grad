import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Plan from '../views/Plan.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/plan',
    name: 'Plan',
    component: Plan
  },
  {
    path: '/moduleinfo',
    name: 'ModuleInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ModuleInfo.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import('../views/Calculator.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
