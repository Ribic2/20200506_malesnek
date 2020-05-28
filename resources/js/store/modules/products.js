import api from '../../services/api.js'

export default{
    state: ()=>({
        products: '',
        categories: ''
    }),
    mutations:{
        ADD_DATA(state, payload){
            state.products = payload;
        },
        SAVE_CATEGORIES(state, payload){
            state.categories = payload
        },
        FILTER_PRODUCTS(state, payload){
            state.products = payload
        }
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
        }
    },
    getters:{

    }
}
