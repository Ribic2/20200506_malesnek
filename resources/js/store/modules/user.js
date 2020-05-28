import api from '../../services/api.js'

export default{
    state: ()=>({
        Name: '',
        Surname: '',
        Email: '',
        Phone: '',
        userId: '',
        isEmployee: '',
        LoginStatus: false
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
        },
        LOGOUT_USER(state){
            state.Name = null
            state.Surname = null
            state.Email = null
            state.Phone = null
            state.userId = null
            state.LoginStatus = false
        }
    },
    actions:{
        storeUserData({commit}){
            if(localStorage.getItem('authToken')){
                axios.defaults.headers.common["Authorization"] = `Bearer `+localStorage.getItem('authToken')

                axios.get('/api/profile').then((results)=>{
                    commit('ADD_USER_DATA', results.data.user)
                })
            }
            else{
                console.log("Not logged in")
            }
        },
        logoutUser({commit}){
            localStorage.removeItem('authToken');
            commit('LOGOUT_USER')
        },
    },
    getters:{

    }
}
