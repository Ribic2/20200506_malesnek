import api from '../../services/api.js'

export default{
    state: ()=>({
        products: '',
        counter: 1,
        stopApiCalls: false,
        selected: false,
        categories: '',
    }),
    mutations:{
        ADD_DATA(state, payload){
            //First checks if there were any specific selections
            if(state.selected == true){
                state.selected = false
                state.products = null
                state.products = payload

                state.counter++
            }
            else{     
                if(payload.length <= 0 || state.stopApiCalls){
                    state.stopApiCalls = true
                }
                else{
                    if(state.products.length == 0){
                        state.products = payload
                    }
                    else{
                        for(let i = 0; i < payload.length; i++){
                            state.products.push(payload[i])
                        }
                    }
                    state.counter++
                }   
            }
        },
        SAVE_CATEGORIES(state, payload){
            state.categories = payload
        },
        FILTER_PRODUCTS(state, payload){
            state.products = null
            state.products = payload
            
            state.counter = 1
            state.selected = true
        },
    },
    actions:{
        //Return items per page
        getDataPerPage({commit}, payload){
            api.getItems(payload)
            .then((results)=>{
                commit('ADD_DATA', results.data.data)
            })
        },
        getCategories({commit}){
            api.getCategories()
            .then((results)=>{
                commit('SAVE_CATEGORIES', results.data)
            })
        },
        filterItemsByCategory({commit}, payload){

            api.getProductsSpecificCategory(payload)
            .then((results)=>{

                commit('FILTER_PRODUCTS', results.data.data)
            })
        },
        
    },
    getters:{

    }
}
