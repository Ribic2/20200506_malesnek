import api from '../../services/api.js'
import Axios from 'axios'

export default{
    state: ()=>({
        items: [],
        orders: []
    }),
    mutations:{
        GET_ITEMS(state, payload){
            state.items = payload
        },
        GET_ORDERS(state, payload){
            state.orders = payload
        }
    },
    actions:{
        getItemsForAdmin({commit}){
            api.getItemsForAdmin()
            .then((results)=>{
                commit('GET_ITEMS', results.data.data)
            })
        },
        getOrders({commit}){
            api.getAllOrders()
            .then((results)=>{
                commit('GET_ORDERS', results.data.data)
            })

        },
        //Filter for orders
        filterAll({commit}){
            api.getAllOrders()
            .then((results)=>{
                commit('GET_ORDERS', results.data)
            })

        },
        filterFinished({commit}){
            api.filterFinished()
            .then((results)=>{
                commit('GET_ORDERS', results.data)
            })
        },
        filterComplete({commit}){
            api.filterComplete()
            .then((results)=>{
                commit('GET_ORDERS', results.data)
            })
        },
        filterOldest({commit}){
            api.filterOldest()
            .then((results)=>{
                console.log(results.data)
                commit('GET_ORDERS', results.data)
            })
        },
        filterLatest({commit}){
            api.filterLatest()
            .then((results)=>{
                console.log(results.data)
                commit('GET_ORDERS', results.data)
            })
        },
        //Search for items
        searchItems({commit}, payload){
            api.searchItem(payload)
            .then((results)=>{
                commit('GET_ITEMS', results.data)
            })
        },
        allUnlisted(){
            api.getUnlistedItems()
            .then((results)=>{
                console.log(results)
            })
        },

        getAllItems(){
            api.getItemsForAdmin()
            .then((results)=>{
                console.log(results)
            })
        },
        allDelisted(){
            api.getDelistedItems()
            .then((results)=>{
                console.log(results)
            })
        }

    },
    getters:{

    }
}
