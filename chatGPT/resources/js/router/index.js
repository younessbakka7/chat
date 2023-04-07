import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'

import test from '../pages/test.vue'

import AuthLayout from '../layouts/AuthLayout.vue'
import GuestLayout from '../layouts/GuestLayout.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/GuestLayout',
      name: 'GuestLayout',
      component: GuestLayout,
      // children: [
        
      // ]
    },
    {
      path: '/',
      name: 'home',
      component:Home 
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/AuthLayout',
      name: 'AuthLayout',
      component: AuthLayout,
      beforeEnter: guardAuth,
      children: [
      
        {
          path: '/test',
          name: 'test',
          component: test
        },
      
        {
          path: '/',
          name: 'home',
          component:Home 
        },
      ]
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
