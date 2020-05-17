import api from '../../services/api.js'

export default{
    state: ()=>({
        Name: '',
        Surname: '',
        Email: '',
        Phone: '',
        LoginStatus: false
    }),
    mutations:{
        ADD_USER_DATA(state, payload){
            state.Name = payload.Name
            state.Surname = payload.Surname
            state.Email = payload.Email
            state.Phone = payload.Phone
            state.LoginStatus = true;

            console.log(payload)



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
    },
    getters:{

    }
}
