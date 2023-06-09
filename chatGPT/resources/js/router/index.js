import { createRouter, createWebHistory } from 'vue-router'


import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Chatboot from '../pages/Chatboot.vue'
import Edit from '../pages/Edit.vue'



import AuthLayout from '../layouts/AuthLayout.vue'
import GuestLayout from '../layouts/GuestLayout.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/GuestLayout',
      name: 'GuestLayout',
      component: GuestLayout,
      children: [
      
      {
        path: '/Chatboot',
        name: 'Chatboot',
        component: Chatboot
      },
      {
        path: '/Edit',
        name: 'Edit',
        component: Edit
      },
      ]
    },
    
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
  
    {
      path: '/AuthLayout',
      name: 'AuthLayout',
      component: AuthLayout,
      beforeEnter: guardAuth,
      // children: [
      
      
      

      // ]
    },
  ]
})

function guardAuth(to,from,next) {
  if (localStorage.getItem('auth') == 1) {
    return next()
  }
  return next('/login')
}

export default router
