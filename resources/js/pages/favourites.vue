<template>
    <v-container>
        <v-row>
            <v-col
            v-for="item in this.$store.state.favourites.favouriteItem" v-bind:key="item.id"
            cols="12"
            >
                <v-card
                height="200"
                >
                    <v-row>
                        <v-col>
                            {{ item.itemName }}
                        </v-col>
                        <v-col>
                            {{ item.itemPrice}}
                        </v-col>
                        <v-col>
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
