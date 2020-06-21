import { Store } from "vuex"
import api from '../../services/api.js'
import { add } from "lodash"

export default{
    state: ()=>({
       cart: [],
       fullPrice: 0
    }),
    mutations:{
        ADD_DATA_TO_CART(state, payload){


            //If cart is empty adds item
            if(state.cart.length == 0){
                state.cart.push({product: payload, quantity: 1})
                localStorage.setItem('cartStorage', JSON.stringify(state.cart))
                state.fullPrice+=parseFloat(payload.itemPrice);

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
                state.fullPrice+=parseFloat(payload.itemPrice);
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
            console.log(payload)
            var foundItemIndex = null
            for(var i = 0; i < state.cart.length; i++){

                if(state.cart[i].itemId == payload.itemId){
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
                        let addup = parseFloat(payload.product.itemPrice).toFixed(2)
                        state.fullPrice -= parseFloat(addup)
                        state.cart[i].quantity--
                        localStorage.setItem('cartStorage', JSON.stringify(state.cart))
                    }
                    else if(payload.status == "plus"){

                        let addup = parseFloat(payload.product.itemPrice).toFixed(2)
                        state.fullPrice += parseFloat(addup)
                        state.cart[i].quantity++
                        localStorage.setItem('cartStorage', JSON.stringify(state.cart))
                    }
                }
           }
        },
        RESET_FULL_PRICE(state, payload){
            state.fullPrice = payload
        },
        CHANGE_INPUT_QUANTITY(state, payload){
            let fullpriceCounter = 0
            for(let i = 0; i < state.cart.length; i++){
                if(state.cart[i].product.itemId == payload.product.itemId){
                    state.cart[i].quantity = payload.quantity
                    localStorage.setItem('cartStorage', JSON.stringify(state.cart))

                    for(let i = 0; i < state.cart.length; i++){

                        fullpriceCounter+=state.cart[i].quantity * state.cart[i].product.itemPrice
                    }
                }
            }

            state.fullPrice = fullpriceCounter
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
        getFullPrice({commit}, payload){
            commit('RESET_FULL_PRICE', payload)
        },
        changeQuantityInput({commit}, payload){
            commit('CHANGE_INPUT_QUANTITY', payload)
        }
    },
    getters:{

    }
}
