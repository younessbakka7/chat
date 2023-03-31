import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Interface from '../pages/Interface.vue'
import test from '../pages/test.vue'
import AuthLayout from '../layouts/AuthLayout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      children: [
        {
          path: '/Interface',
          name: 'Interface',
          component: Interface
        },
        {
          path: '/test',
          name: 'test',
          component: test
        },

      ]
    },
    
    
    
  ]
})

export default router
