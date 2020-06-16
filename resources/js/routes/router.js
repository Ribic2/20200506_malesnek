import Vue from 'vue'
import VueRouter from 'vue-router'

//Import layout
import login from '../pages/user/login.vue'
import Axios from 'axios'
import api from '../services/api'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'index',
            component: ()=>import('../pages/index/index.vue'),
        },
        {
            path: '/user',
            name: 'user',
            component: ()=> import('../pages/user/index.vue'),
            children:[
                {
                    path: '/user/login',
                    name: 'login',
                    component: ()=> import('../pages/user/login.vue'),
                    beforeEnter: (to, from, next)=>{
                        if(localStorage.getItem('authToken') == null){
                            next()
                        }
                        else{
                            next({name: 'index'})
                        }
                    }
                },
                {
                    path: '/user/order/history',
                    component: ()=> import('../pages/user/history.vue')
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
            path: '/kontakt',
            component: ()=> import('../pages/kontakt.vue')
        },
        {
            path: '/priljubljeno',
            component: ()=> import('../pages/favourites.vue')
        },
        {
            path: '/checkout',
            name:'checkout',
            component: ()=>import('../pages/kosarica/checkout.vue')
        },
        {
            path: '/admin',
            component: ()=> import('../pages/admin/index.vue'),
            redirect: {name: 'orders'},
            meta: {layout: "admin"},
            //Checks if user is admin or not
            beforeEnter: (to, from, next) =>{
                if(localStorage.getItem('authToken')){
                    axios.defaults.headers.common["Authorization"] = `Bearer `+localStorage.getItem('authToken')

                    axios.get('/api/profile/admin').then((results)=>{
                        if(!results.data){
                           next({name: 'index'})
                        }
                        else{
                            next();
                        }
                    })
                }
                else{
                    next({name: 'index'})
                }
            },
            children:[
                {
                    path: '/admin/items',
                    meta: {layout: "admin"},
                    component: ()=> import('../pages/admin/items.vue')
                },
                {
                    path: '/admin/orders',
                    name: 'orders',
                    meta: {layout: "admin"},
                    component: ()=> import('../pages/admin/orders.vue')
                },
                {
                    path: '/admin/contacts',
                    meta: {layout: "admin"},
                    component: ()=> import('../pages/admin/contacts.vue')
                },
                {
                    path: '/admin/users',
                    meta: {layout: "admin"},
                    component: ()=> import('../pages/admin/users.vue')
                }
            ]
        },
        {
            path: '/izdelek/:id',
            component: ()=> import('../pages/item.vue'),
            //Checks if item even exits
            beforeEnter: (to, from, next)=>{
                let id = to.params.id

                api.getProductData(id)
                .then((results)=>{
                    if(results.data.data[0] == null){
                       next({name: '404'})
                    }
                    else{
                       next()
                    }
                })
            }
        },
        //Confirmation of password
        {
            path: '/confirmation',
            component: ()=>import('../pages/user/confirmationUser.vue')
        },
        {
            path: '/stran-ni-bila-najdena',
            name: '404error',
            component: ()=>import('../pages/errors/404.vue')
        },
        {
            path: '/*',
            name: '404',
            redirect: {name: '404error'},
        }
    ]
})

export default router
