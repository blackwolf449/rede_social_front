import { createRouter, createWebHistory } from 'vue-router'
import Controller from '../views/Controller.vue'
import Posts from '../views/Posts.vue'
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
        component: Posts,
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
