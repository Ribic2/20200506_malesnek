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
        getContact({commit}){
            api.getContact()
            .then((results)=>{
                commit('GET_CONTACTS', results.data)
            })
        },
        getOldest({commit}){
            api.oldestContacts()
            .then((results)=>{
                commit('GET_CONTACTS', results.data)
            })
        },
        getLatest({commit}){
            api.latestContacts()
            .then((results)=>{
                commit('GET_CONTACTS', results.data)
            })
        }
    },
    getters:{

    }
}
