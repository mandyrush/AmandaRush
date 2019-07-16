import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import AboutMe from './views/AboutMe';
import ContactMe from './views/ContactMe';
import MyWork from './views/MyWork';

Vue.use(Router);

export default new Router({
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
          path: '/my-work',
          name: 'my-work',
          component: MyWork
        }
      ]
    }
  ]
});
