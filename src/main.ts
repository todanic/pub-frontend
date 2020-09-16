import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import './assets/scss/_all.scss';
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;
Vue.use(Vuetify, VeeValidate);

new Vue({
  vuetify: new Vuetify(),
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
