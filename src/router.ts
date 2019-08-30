import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Layout from './components/layout/layout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
    },
  ],
});
