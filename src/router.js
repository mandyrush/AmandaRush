import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index'
import About from './views/About'
import Skills from './views/Skills'
import Portfolio from './views/Portfolio'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    }
  ]
})
