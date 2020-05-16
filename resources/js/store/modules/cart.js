export default{
    state: ()=>({
       cart: []
    }),
    mutations:{
        ADD_DATA_TO_CART(state, payload){
            state.cart.push(payload)
            console.log("Izdelek dodan v cart")
        }
    },
    actions:{
        addProduct({commit}, payload){

            commit('ADD_DATA_TO_CART', payload)
        }
    },
    getters:{

    }
}
