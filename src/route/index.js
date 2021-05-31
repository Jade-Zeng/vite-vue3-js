import {createRouter, createWebHashHistory} from "vue-router";
import Layout from '@/layout/index.vue'

export const routes = [
    {
        path: '/',
        component: Layout,
        meta: {title: '首页'},
        children: []
    },
    {
        path: '/tom',
        component: Layout,
        meta: {title: 'TOM'},
        children: [
            {
                path: '/tom',
                component: () => import('@/views/tom.vue')
            }
        ]
    },
    {
        path: '/jerry',
        component: Layout,
        meta: {title: 'JERRY'},
        children: [
            {
                path: '/jerry',
                component: () => import('@/views/jerry.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
