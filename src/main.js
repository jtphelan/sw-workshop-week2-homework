import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes'
import './plugins/bootstrap-vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';

Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
  provide: {
    baseUrl: 'https://rickandmortyapi.com/api/',
  },
  store,
}).$mount('#app');
