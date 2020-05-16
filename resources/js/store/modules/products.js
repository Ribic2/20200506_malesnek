import api from '../../services/api.js'

export default{
    state: ()=>({
        products: ''
    }),
    mutations:{
        ADD_DATA(state, payload){
            state.products = payload;
            console.log(state.products)
        }
    },
    actions:{
        //Return items per page
        getDataPerPage({commit}, payload){
            api.getItems(payload)
            .then((results)=>{
                commit('ADD_DATA', results.data.data)
            })
        }
    },
    getters:{

    }
}
