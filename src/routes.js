export default [
    { 
        path: '/',
        component: () => import('./views/Episodes.vue'),
        name: 'episodes'
    },
    {
        path: '/characters',
        component: () => import('./views/Characters.vue'),
        name: 'characters-list'
    },
    {
        path: '/character/:id',
        component: () => import('./views/Character.vue'),
        name: 'character',
        props: true
    },
    {
        path:'*',
        component: () => import('./components/HelloWorld.vue'),
        props: { msg: '404 Page not found' }
       
    }
]