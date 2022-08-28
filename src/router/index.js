import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    // {
    //     path: '/',
    //     name: 'cpnreoler',
    //     component: Controller,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
    {
        path: '/posts',
        name: 'Posts',
        component: () => import('../views/Posts.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
