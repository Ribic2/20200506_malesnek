<template>
    <v-container>
        <v-row
        v-for="product in this.$store.state.favourites.favouriteItem" v-bind:key="product.id">
            <v-col
            class="itemHolder"
            cols="3"
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
    .test{
        border: solid 1px black;
        height: 100%;
    }

    .row{
        width: 100%;
        margin: 0 auto;
    }

</style>
