import { Store } from "vuex"
import api from '../../services/api.js'

export default{
    state: ()=>({
       cart: []
    }),
    mutations:{
        ADD_DATA_TO_CART(state, payload){


            //If cart is empty adds item
            if(state.cart.length == 0){
                state.cart.push({product: payload, quantity: 1})
                localStorage.setItem('cartStorage', JSON.stringify(state.cart))

            }
             //If not then it checks cart products and check if newly added product is already in cart
            //If it's not it addes it
            //Else it returns false
            else{
                 for(var i = 0; i < state.cart.length; i++){

                    if(payload.itemId == state.cart[i].product.itemId){

                        state.cart.splice(i, 1)
                        localStorage.setItem('cartStorage', JSON.stringify(state.cart))
                        return false
                    }
                }
                //Turns item button to green and changes text
                //TODO
                state.cart.push({product: payload, quantity: 1})
                localStorage.setItem('cartStorage', JSON.stringify(state.cart))
            }

        },
        //Mutation that resets cart array with locastorage array
        REFRESH_CART_DATA(state){
            if(JSON.parse(localStorage.getItem('cartStorage')) == null){
                state.cart = new Array
            }
            else{
                state.cart = JSON.parse(localStorage.getItem('cartStorage'))
            }
        },
        DELETE_CART(state){
            state.cart = new Array;
            localStorage.removeItem('cartStorage')
        },
        DELETE_PRODUCT(state, payload){
            var foundItemIndex = null
            for(var i = 0; i < state.cart.length; i++){

                if(state.cart[i].itemId == payload){
                    foundItemIndex = i
                }
            }
           state.cart.splice(foundItemIndex, 1)
           localStorage.setItem('cartStorage', JSON.stringify(state.cart))
        },
        CHANGE_QUANTITY(state, payload){
           for(let i = 0; i < state.cart.length; i++){
                if(state.cart[i].product.itemId == payload.product.itemId){
                    if(payload.status == "minus" && payload.quantity - 1 > 0){
                        state.cart[i].quantity--
                        localStorage.setItem('cartStorage', JSON.stringify(state.cart))
                    }
                    else if(payload.status == "plus"){

                        state.cart[i].quantity++
                        localStorage.setItem('cartStorage', JSON.stringify(state.cart))
                    }
                }
           }
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
            console.log("Checking")
            commit('REFRESH_CART_DATA')
        },
        //Deletes whole cart array upon logout
        deleteCart({commit}){
            commit('DELETE_CART')
        },
        //Deletes selected item from cart
        deleteProductFromCart({commit}, payload){
            commit('DELETE_PRODUCT', payload)
        },

        //Changes quantity of an item in cart
        changeQuantity({commit}, payload){
            commit('CHANGE_QUANTITY', payload)
        },
    },
    getters:{

    }
}
