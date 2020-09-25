import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import VueRouter from 'vue-router';
import './plugins/bootstrap-vue';
import App from './App.vue';
import routes from './routes';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

Vue.use(VueRouter);

const router = new VueRouter({ routes });

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

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://rickandmortyapi.com/graphql/',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  render: (h) => h(App),
  router,
<<<<<<< HEAD
  provide: {
    baseUrl: 'https://rickandmortyapi.com/api/',
  },
  store,
=======
  apolloProvider,
>>>>>>> 699f8eecdb72ddc3444ea0b919b057cfa75f6ef6
}).$mount('#app');
