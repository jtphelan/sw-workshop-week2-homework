import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'episodes',
    component: () => import('../views/Episodes.vue'),
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('../views/Characters.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
