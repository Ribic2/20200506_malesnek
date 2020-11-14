import api from '../../services/api.js'
import migration from '../../../../migration.json'

export default{
    state: ()=>({
        user: null,

        //Place
        houseNumberAndStreet: '',
        Postcode: '',
        Region: ''
    }),
    mutations:{
        SET_USER_DATA(state, payload){
            state.user = payload
        },
        LOGOUT_USER(state){
            state.Name = null
            state.Surname = null
            state.Email = null
            state.Phone = null
            state.userId = null
            state.LoginStatus = false
            state.isAuth = false
            state.isNewCustomer = false
            state.check = false

            localStorage.removeItem('authToken')
            localStorage.removeItem('cartStorage')
            localStorage.removeItem('orderHistory')

            window.location.href=migration[0].redirectURL

        },
        STORE_USER_ORDER_HISTORY(state){
            axios.post(migration[0].redirectURL+'api/user/orders/history', {userId: state.userId})
            .then((results)=>{
                localStorage.setItem('orderHistory', JSON.stringify(results.data))
                state.orderHistory = JSON.parse(localStorage.getItem('orderHistory'))
            })
        },
    },
    actions:{
        getUser({commit}){
           api.getUsersData().then((response)=>{
               if(response.data.check){
                   commit('SET_USER_DATA', response.data.user)
               }
           })
        },


        logout({commit}){
            // Clears token and cart
            localStorage.clear()
            commit('SET_USER_DATA', null)
        },
        getUserOrderHistory({commit}, payload){
            commit('STORE_USER_ORDER_HISTORY')
        },
    },
    getters:{

    }
}
