import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Today from '../views/Today.vue';
import Week from '../views/Week.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/today',
      name: 'today',
      component: Today,
    },
    {
      path: '/week',
      name: 'week',
      component: Week,
    },
  ],
});
