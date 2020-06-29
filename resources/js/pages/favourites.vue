<template>
    <v-container>
        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        <v-row v-if="(this.$store.state.favourites.favouriteItem == null || this.$store.state.favourites.favouriteItem.length == 0) && overlay == false">
            <v-card
            id = "emptyFavourites"
            elevation="0"
            >
                <div id = "starHolder">
                    <v-icon
                    size="100"
                    id="starIcon"
                    >
                    mdi-star</v-icon>
                </div>
                <h3 class="text-center">Nimate dodanih nobenih izdelkov!</h3>
            </v-card>
        </v-row>

        <v-row>
            <v-col
            v-for="product in this.$store.state.favourites.favouriteItem" v-bind:key="product.id"
            cols="12"
            xl="3"
            lg="6"
            md="6"
            >
                <item v-bind:product="product"></item>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import item from '../pages/index/item.vue'
import store from '../store/index'
import Axios from 'axios'
export default {
    components:{
        item
    },
    data(){
        return{
            overlay: false
        }
    },
    methods:{
        resetFavouritesData(){
                if(localStorage.getItem('favouritesStorage') == null){
                    localStorage.setItem('favouritesStorage', "[]")
                }
                else{
                    this.overlay = true
                    var data = JSON.parse(localStorage.getItem('favouritesStorage'))
                    Axios.post('/api/check/favourites', {favourites: JSON.parse(localStorage.getItem('favouritesStorage'))})
                    .then((results)=>{
                        if(data == null && results == null){
                            this.overlay = false
                        }
                        else{
                            
                            for(let i = 0; i < results.data.length; i++){
                                for(let x = 0; x < data.length; x++){
                                    if(data[x].itemId == results.data[i]){
                                        data.splice(x,1)
                                    }
                                }
                            }
                            
                            localStorage.setItem('favouritesStorage', JSON.stringify(data))
                            this.$store.state.favourites.favouriteItem = data
                            this.overlay = false
                        }   
                    })
                    this.overlay = false
                }
        },
        deletFromFavourites(e){
            this.$store.dispatch('deleteFromFavouritesArray', e)
        }
    },
    mounted(){
        this.resetFavouritesData()
    }

}
</script>

<style>
    #emptyFavourites{
        width: 100%;
        margin: auto;
        position: absolute;
        top: 28%; 
        left: 0;
        bottom: 0; 
        right: 0;
    }
    #starIcon{
        position: relative;
        vertical-align: middle;
        height: 100%;
        width: 100%;
    }
    #starHolder{
        width: 5%;
        margin: 0 auto;
    }
</style>
