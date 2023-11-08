// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/consults',
    component: () => import(/* webpackChunkName: "home" */ '@/views/ConsultList.vue'),
  },
  {
    path: '/consult-request',
    component: () => import(/* webpackChunkName: "home" */ '@/views/ConsultRequest.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
