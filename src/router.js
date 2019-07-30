import Vue from "vue";
import Router from "vue-router";

import AboutMe from './views/AboutMe';
import Skills from './views/Skills';
import Portfolio from './views/Portfolio';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
          path: "/",
          name: "about-me",
          component: AboutMe
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
});
