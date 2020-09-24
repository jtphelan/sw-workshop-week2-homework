import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
  provide: {
    baseUrl: 'https://rickandmortyapi.com/api/',
  },
}).$mount('#app');
