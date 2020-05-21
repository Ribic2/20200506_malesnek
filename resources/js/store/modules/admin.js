import api from '../../services/api.js'

export default{
    state: ()=>({
        items: ''
    }),
    mutations:{
        GET_ITEMS(state, payload){
            state.items = payload
        }
    },
    actions:{
        getItemsForAdmin({commit}){
            api.getItemsForAdmin()
            .then((results)=>{
                commit('GET_ITEMS', results.data.data)
            })
        }
    },
    getters:{

    }
}
