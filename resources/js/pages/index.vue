<template>
    <v-container>
        <v-card
        color="#6C3FB8"
        dark
        >
            <v-card-actions>
                <v-card-title>Trgovina</v-card-title>
                <v-btn
                icon
                @click="show = !show"
                >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>
            <v-expand-transition>
                <div v-show="show" id = "filter">
                <v-divider></v-divider>
                <div id = "filterButtonHolder">
                    <v-btn-toggle>
                    <v-btn
                    color="#6C3FB8"
                    >
                    Redni artikli
                    </v-btn>
                    <v-btn
                    color="#6C3FB8"
                    >
                    Unikati artikli
                    </v-btn>
                    </v-btn-toggle>
                </div>
                </div>
            </v-expand-transition>
        </v-card
        >
        <v-row>
            <v-col
            v-for="product in getData"
            :key="product.itemName"
            cols="12"
            xl="3"
            >
                <v-card>
                    <v-responsive :aspect-ratio="4/5">
                        <v-card-title>{{ product }}</v-card-title>
                        <v-btn @click="addToCart(product)">Dodaj</v-btn>
                    </v-responsive>

                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import store from '../store/index'

export default {
    data(){
        return{
            show: false
        }
    },
    methods:{
        addToCart(e){
            return this.$store.dispatch('addProduct', e)
        },
        addData(){
            return this.$store.dispatch('getDataPerPage', 1)
        },
        authUser(){
            return this.$store.dispatch('storeUserData')
        }


    },
    computed:{
        getData(){
            return this.$store.state.products.products
        },

    },
    mounted(){
        this.addData(),
        this.authUser()
    }
}
</script>

<style scoped>

</style>

