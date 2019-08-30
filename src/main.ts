import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/common.scss';
import './css/default-theming/default-theme.scss';
import './css/default-theming/green-theme.scss';
import './css/default-theming/red-theme.scss';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
