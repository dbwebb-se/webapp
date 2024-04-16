import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductList
    },
    {
      path: '/packlist',
      name: 'packlist',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/PackList.vue')
    }
  ]
})

export default router
