import { Store } from "vuex"
import api from '../../services/api.js'

export default{
    state: ()=>({
       cart: []
    }),
    mutations:{
        ADD_DATA_TO_CART(state, payload){
           state.cart.push(payload)
           localStorage.setItem('cartStorage', JSON.stringify(state.cart))
        },
        //Mutation that resets cart array with locastorage array
        REFRESH_CART_DATA(state){
            state.cart = JSON.parse(localStorage.getItem('cartStorage'))
        },
        DELETE_CART(state){
            state.cart = []
            localStorage.removeItem('cartStorage')
        }
    },
    actions:{
        /**
         * Action that recives payload and sends it to mutation that stores it inside cart array
         */
        addProduct({commit}, payload){
            commit('ADD_DATA_TO_CART', payload)
        },
        //Check if non register user already have it cart data stored and reapply it
        checkLocalStorageCart({commit}){
            commit('REFRESH_CART_DATA')
        },
        deleteCart({commit}){
            commit('DELETE_CART')
        }
    },
    getters:{

    }
}
