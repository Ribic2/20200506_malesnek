import Axios from "axios"

export default{
    state: ()=>({
        favouriteItem: []
    }),
    mutations:{
        //Adds new item to favourites
        ADD_TO_FAVOURITES(state, payload){
            console.log(payload)
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
        },
        RESET_FAVOURITES(state){
            if(state.favouriteItem == null || state.favouriteItem.length == 0){
                state.favouriteItem = new Array
                state.favouriteItem = JSON.parse(localStorage.getItem('favouritesStorage'))
            }
            else{
                Axios.post('/api/check/favourites', {favourites: JSON.parse(localStorage.getItem('favouritesStorage'))})
                .then((results)=>{
                    console.log(results)
                    for(let i = 0; i < results.data.length; i++){
                        for(let x = 0; x < state.favouriteItem.length; x++){
                            if(state.favouriteItem[x].itemId == results.data[i]){
                                state.favouriteItem.splice(x,1)
                            }
                        }
                    }
                })
                localStorage.setItem('favouritesStorage', JSON.stringify(state.favouriteItem))
                state.favouriteItem = JSON.parse(localStorage.getItem('favouritesStorage'))
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
        resetFavouritesArray({commit}){
            commit('RESET_FAVOURITES')
        },
        deleteFromFavouritesArray({commit}, payload){
            commit('DELETE_FROM_FAVOURITES', payload)
        }

    },
    getters:{

    }
}
