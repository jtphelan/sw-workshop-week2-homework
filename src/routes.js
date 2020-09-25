export default [
  {
    path: '/',
    name: 'episodes',
    component: () => import('./views/Episodes.vue'),
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('./views/Characters.vue'),
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('./views/Favorites.vue'),
  },
];
