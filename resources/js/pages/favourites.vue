<template>
    <v-container>
        <v-row  v-for="item in this.$store.state.favourites.favouriteItem" v-bind:key="item.id">
            <v-col
            class="itemHolder"
            cols="12"
            >
                <v-card>
                    <v-row
                    class="row"
                    >
                        <v-col
                        class = "test"
                        cols="2"
                        >
                            <v-img
                            aspect-ratio="1"
                            :src='"http://127.0.0.1:8000/storage/products/"+item.dir+"/"+item.primaryImg'
                            ></v-img>
                        </v-col>
                        <v-col  class = "test">
                            {{ item.itemName }}
                        </v-col>
                        <v-col  class = "test">
                            {{ item.itemPrice}}
                        </v-col>
                        <v-col  class = "test">
                            {{ item.OverAllrating}}
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
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
