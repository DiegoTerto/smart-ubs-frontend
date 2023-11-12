// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/consults',
    component: () => import('@/views/ConsultList.vue'),
  },
  {
    path: '/consult-request',
    component: () => import('@/views/ConsultRequest.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
