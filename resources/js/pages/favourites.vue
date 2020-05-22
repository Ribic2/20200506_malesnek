<template>
    <v-container>
        {{ this.$store.state.favourites.favouriteItem}}
    </v-container>
</template>

<script>
import store from '../store/index'
export default {
    methods:{
        resetFavouritesData(){
            this.$store.dispatch('resetFavouritesArray')
        }
    },
    mounted(){
        this.resetFavouritesData()
    }

}
</script>
