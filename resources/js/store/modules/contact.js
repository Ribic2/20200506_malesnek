import api from '../../services/api.js'

export default{
    state: ()=>({
        contacts: ''
    }),
    mutations:{
        GET_CONTACTS(state, data){
            state.contacts = data
        }
    },
    actions:{
        addContact({commit}, payload){
            api.sendContact(payload)
        },
        getContact({commit}){
            api.getContact()
            .then((results)=>{
                commit('GET_CONTACTS', results.data)
            })
        }
    },
    getters:{

    }
}
