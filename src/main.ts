import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './pages/App.vue';
import store from './store/main-store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
