import Vue from 'vue'
import VueRouter from 'vue-router'

//Import layout
import login from '../pages/user/login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'index',
            component: ()=>import('../pages/index.vue'),
        },
        {
            path: '/user',
            name: 'user',
            component: ()=> import('../pages/user/index.vue'),
            children:[
                {
                    path: '/user/login',
                    component: ()=> import('../pages/user/login.vue'),
                },
                {
                    path: '/user/register',
                    component: ()=> import('../pages/user/register.vue')
                }
            ]
        },
        {
            path: '/kosarica',
            name: 'cart',
            component: ()=> import('../pages/kosarica/index.vue'),
            children:[
                {
                    path: '/kosarica/1',
                    component: ()=> import('../pages/kosarica/credentials.vue'),
                },
                {
                    path: '/kosarica/2',
                    component: ()=> import('../pages/kosarica/paymentMethod.vue')
                }
            ]
        },
        {
            path: '/*',
            meta: {layout: "error"}
        }
    ]
})

export default router
