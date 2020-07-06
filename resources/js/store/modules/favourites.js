import api from '../../services/api.js'

export default{
    state: ()=>({
        favouriteItem: []
    }),
    mutations:{
        RESET_FAVOURITES_REGISTERD_USER(state, payload){
            if(payload != "ok"){


                for(let i = 0; i < payload.length; i++){

                    state.favouriteItem.push(payload[i][0])
                }
                localStorage.setItem('favouritesStorage', JSON.stringify(state.favouriteItem))
            }

        },
        //Adds new item to favourites
        ADD_TO_FAVOURITES(state, payload){

            if(localStorage.getItem('authToken')){
                api.addToFavourites({itemId: payload.itemId})
                .then((results)=>{

                    if(results.data == true){
                        console.log(payload)
                        state.favouriteItem.push(payload)
                    }
                    else{
                        for(var i = 0; i < state.favouriteItem.length; i++){
                            if(state.favouriteItem[i].itemId == payload.itemId){
                                state.favouriteItem.splice(i, 1)
                                localStorage.setItem('favouritesStorage', JSON.stringify(state.favouriteItem))
                                return false;
                            }
                        }
                    }
                })
            }
            else{
                if(state.favouriteItem == null || state.favouriteItem.length == 0){
                    state.favouriteItem = new Array
                    state.favouriteItem.push(payload)

                    localStorage.setItem('favouritesStorage', JSON.stringify(state.favouriteItem))
                }
                else{
                    for(let i = 0; i < state.favouriteItem.length; i++){
                        if(state.favouriteItem[i].itemId == payload.itemId){
                            state.favouriteItem.splice(i, 1)
                            localStorage.setItem('favouritesStorage', JSON.stringify(state.favouriteItem))
                            return false;
                        }
                    }
                    state.favouriteItem.push(payload)

                    localStorage.setItem('favouritesStorage', JSON.stringify(state.favouriteItem))
                }
            }
        },

        DELETE_FROM_FAVOURITES(state, payload){
            var foundItemIndex = null
            for(var i = 0; i < state.favouriteItem.length; i++){

                if(state.favouriteItem[i].itemId == payload.itemId){
                    foundItemIndex = i
                }
            }
           state.favouriteItem.splice(foundItemIndex, 1)
           localStorage.setItem('favouritesStorage', JSON.stringify(state.cart))
        }
    },
    actions:{
        //Calls mutation that pushes new item to favourites
        addToFavourites({commit}, payload){
            commit('ADD_TO_FAVOURITES', payload)
        },

        deleteFromFavouritesArray({commit}, payload){
            commit('DELETE_FROM_FAVOURITES', payload)
        },

        resetFavouritesRegisterdUser({commit}){
            api.getAllFavourites()
            .then((results)=>{
                if(results.data != null){
                    console.log(results.data)
                    commit('RESET_FAVOURITES_REGISTERD_USER', results.data)
                }
            })
        }
    },
}
