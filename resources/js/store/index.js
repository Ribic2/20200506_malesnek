import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        products
    }
})
