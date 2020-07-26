import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        name: 'Layout',
        component: () => import(/* webpackChunkName: "Layout" */ '@/views/Layout.vue'),
        children: [
            {
                path: '/render_less',
                name: 'RenderLess',
                component: () => import(/* webpackChunkName: "RenderLess" */ '@/views/RenderLess.vue')
            }
        ],
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
