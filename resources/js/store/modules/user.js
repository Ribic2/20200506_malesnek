import api from '../../services/api.js'

export default{
    state: ()=>({
        Name: '',
        Surname: '',
        Email: '',
        Phone: '',
        userId: '',
        isEmployee: '',
        LoginStatus: false,
        isAuth: '',
        check: false,
        isNewCustomer: '',
        orderHistory: ''
    }),
    mutations:{
        ADD_USER_DATA(state, payload){
            state.Name = payload.Name
            state.Surname = payload.Surname
            state.Email = payload.Email
            state.Phone = payload.Phone
            state.userId = payload.id
            state.isEmployee = payload.isEmployee
            state.LoginStatus = true
            state.isAuth = payload.isAuth
            state.isNewCustomer = payload.isNewCustomer
            //Checks if user is authentiacted (activated his/her mail)
            //and if user ever purchased
            if(state.isAuth == 1){
                state.check=true
            }
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

            window.location.href="http://127.0.0.1:8000/"
        },
        STORE_USER_ORDER_HISTORY(state){
            if(localStorage.getItem('authToken') == null){
                window.location.href="http://127.0.0.1:8000"
            }
            else{
                if(JSON.parse(localStorage.getItem('orderHistory'))  != null){
                    state.orderHistory = JSON.parse(localStorage.getItem('orderHistory'))
                }
                else{
                    axios.post('/api/user/orders/history', {userId: state.userId})
                    .then((results)=>{
                        console.log(results)
                        localStorage.setItem('orderHistory', JSON.stringify(results.data))
                        state.orderHistory = JSON.parse(localStorage.getItem('orderHistory'))
                    })
                }
            }
        },
    },
    actions:{
        storeUserData({commit}){
            if(localStorage.getItem('authToken')){
                axios.defaults.headers.common["Authorization"] = `Bearer `+localStorage.getItem('authToken')

                axios.get('/api/profile').then((results)=>{
                    commit('ADD_USER_DATA', results.data.user)
                })
            }
        },
        logoutUser({commit}){
            localStorage.clear();
            commit('LOGOUT_USER')
        },
        getUserOrderHistory({commit}, payload){
            commit('STORE_USER_ORDER_HISTORY')
        },
    },
    getters:{

    }
}
