export default{
    state: ()=>({
        favouriteItem: []
    }),
    mutations:{
        //Adds new item to favourites
        ADD_TO_FAVOURITES(state, payload){
            if(state.favouriteItem == null){
                console.log("null")
                state.favouriteItem = new Array
                state.favouriteItem.push(payload)

                localStorage.setItem('favouritesStorage', JSON.stringify(state.favouriteItem))
            }
            else{
                for(let i = 0; i < state.favouriteItem.length; i++){
                    if(state.favouriteItem[i].itemId == payload.itemId){
                        return false
                    }
                }
                state.favouriteItem.push(payload)

                localStorage.setItem('favouritesStorage', JSON.stringify(state.favouriteItem))
            }
        },
        RESET_FAVOURITES(state){
            state.favouriteItem = JSON.parse(localStorage.getItem('favouritesStorage'))
        }
    },
    actions:{
        //Calls mutation that pushes new item to favourites
        addToFavourites({commit}, payload){
            commit('ADD_TO_FAVOURITES', payload)
        },
        resetFavouritesArray({commit}){
            commit('RESET_FAVOURITES')
        }

    },
    getters:{

    }
}
