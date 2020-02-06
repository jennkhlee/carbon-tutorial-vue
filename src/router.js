import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Page from './views/Page';
// import Test from './components/test/Test.vue';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Page',
      name: 'Page',
      component: Page,
    },
  ],
});