import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import AboutMe from './views/AboutMe';
import ContactMe from './views/ContactMe';
import Portfolio from './views/Portfolio';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: '/about-me',
          name: 'about-me',
          component: AboutMe
        },
        {
          path: '/contact-me',
          name: 'contact-me',
          component: ContactMe
        },
        {
          path: '/portfolio',
          name: 'portfolio',
          component: Portfolio
        }
      ]
    }
  ]
});
