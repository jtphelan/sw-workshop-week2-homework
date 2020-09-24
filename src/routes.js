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
    path: '/character/:id',
    name: 'character',
    component: () => import('./views/Character.vue'),
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('./views/Favorites.vue'),
  },
];
