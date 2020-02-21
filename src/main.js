import Vue from 'vue';
import VueMoment from 'vue-moment';
import App from './App.vue';
import router from './routes';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueMoment);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
