import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products.js'
import cart from './modules/cart.js'
import user from './modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        products: products,
        cart: cart,
        user: user
    },
    state:{

    }
})


