import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'BookStore',
    component: () => import('../views/BookStore.vue')
  },
  {
    path: '/BookInfo/:id',
    name: 'Book',
    component: () => import('../views/viewsSpec/BookInfo.vue')
  },
  {
    path: '/cart/:id',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/outlet',
    name: 'Outlet',
    component: () => import('../views/Outlet.vue')
  }
]


const router = new VueRouter({
  routes 
})

export default router