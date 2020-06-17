<template>
    <v-container>
        <v-row v-if="this.$store.state.favourites.favouriteItem.length == 0">
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
export default {
    components:{
        item
    },
    methods:{
        resetFavouritesData(){
            this.$store.dispatch('resetFavouritesArray')
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
        height: 100% !important;
        position: relative;
        top: 250px;
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
