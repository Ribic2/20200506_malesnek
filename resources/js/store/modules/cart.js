import { Store } from "vuex"
import api from '../../services/api.js'

export default{
    state: ()=>({
       cart: []
    }),
    mutations:{
        ADD_DATA_TO_CART(state, payload){
            state.cart.push(payload)
            console.log(payload)
            localStorage.setItem('cartStorage', state.cart)
        },
        //Mutation that resets cart array with locastorage array
        REFRESH_CART_DATA(state){
            state.cart = localStorage.getItem('cartStorage')
        }
    },
    actions:{
        /**
         * Action that recives payload and sends it to mutation that stores it inside cart array
         */
        addProduct({commit}, payload){
            if(localStorage.getItem('authToken')){
                api.addItemToCart(payload)
            }
            else{
                commit('ADD_DATA_TO_CART', payload)
            }
        },
        //Applys new data to cart array
        checkLocalStorageCart({commit}){
            if(localStorage.getItem('authToken') == null){
                commit('REFRESH_CART_DATA')
            }
        }
    },
    getters:{

    }
}
