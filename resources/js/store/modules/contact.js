import api from '../../services/api.js'

export default{
    state: ()=>({
        contacts: null
    }),
    mutations:{
        GET_CONTACTS(state, data){
            state.contacts = data
        }
    },
    actions:{
        getContacts({commit}){
            api.getContacts()
            .then((response)=>{
                console.log(response)
                //commit('GET_CONTACTS', results.data)
            })
        },
        getOldestContacts({commit}){
            api.getOldestContacts()
            .then((response)=>{
                console.log(response)
                //commit('GET_CONTACTS', results.data)
            })
        },
    },
}
