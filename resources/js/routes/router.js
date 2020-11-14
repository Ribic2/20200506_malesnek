import Vue from 'vue'
import VueRouter from 'vue-router'
import api from '../services/api'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: ()=>import('../layouts/default'),
            children:[
                // Home page
                {
                  path: '',
                  component: ()=>import('../pages/index/index')
                },
                // Contact page
                {
                    path: '/contact',
                    component: ()=> import('../pages/Contact/View.vue')
                },
                // Favourite
                {
                    path: '/favourites',
                    component: ()=> import('../pages/favourites.vue')
                },
                // Login
                {
                    path: '/login',
                    component: ()=> import('../pages/user/login.vue')
                },
                // Cart
                {
                    path: '/cart',
                    name: 'cart',
                    component: ()=> import('../pages/kosarica/index.vue'),
                    children:[
                        {
                            path: '/cart/1',
                            component: ()=> import('../pages/kosarica/credentials.vue'),
                        },
                        {
                            path: '/cart/2',
                            component: ()=> import('../pages/kosarica/paymentMethod.vue')
                        }
                    ]
                },
                // Register
                {
                    path: '/register',
                    component: ()=> import('../pages/user/register.vue'),
                },

                // TODO
                {
                    path: '/profile',
                    component: ()=> import('../pages/user/profile.vue'),
                    beforeEnter: (to, from, next)=>{
                        if(localStorage.getItem('authToken') == null){
                            next('/')
                        }
                        else next()
                    }
                }
            ]
        },
        {
            path: '/checkout',
            name:'checkout',
            component: ()=>import('../pages/kosarica/checkout.vue')
        },
        // Admin panel
        {
            path: '/admin',
            component: ()=> import('../layouts/admin'),
            children:[
                {
                    path: '',
                    component: ()=> import('../pages/admin/items.vue')
                },
                {
                    path: 'orders',
                    component: ()=> import('../pages/admin/orders.vue')
                },
                {
                    path: 'contacts',
                    component: ()=> import('../pages/admin/contacts.vue')
                },
                {
                    path: 'users',
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
        {
            path: '/reset-password',
            name: 'reset-password',
            component: ()=>import('../pages/resetPassword/forgotPassword.vue')
          },
          {
            path: '/reset-password/:token',
            name: 'reset-password-form',
            component: ()=>import('../pages/resetPassword/ResetPasswordForm.vue')
        },
        //Confirmation of password
        {
            path: '/confirmation',
            component: ()=>import('../pages/user/confirmationUser.vue')
        },
    ]
})

export default router
