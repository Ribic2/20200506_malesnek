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
                <v-card @click="selectItem(null)" v-if="currentlySelectedItemId==product.itemId">
                    <v-responsive :aspect-ratio="4/5">
                        <v-card-title>Selected</v-card-title>
                        <v-btn @click="addToCart(product)">Dodaj</v-btn>
                    </v-responsive>
                </v-card>

                <v-card @click="selectItem(product.itemId)" v-else>
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
            show: false,
            currentlySelectedItemId: null
        }
    },
    methods:{
        /**
         * Calls function in vuex that adds item to cart
         * @param {Object} e selected product
         */
        addToCart(e){
            return this.$store.dispatch('addProduct', e)
        },

        /**
         * Calls function in Vuex storage that adds
         * new products to products array
         * ONLY ADDS products of 1st page!
         */
        addData(){
            return this.$store.dispatch('getDataPerPage', 1)
        },
        /**
         * Authenticates user when page is loaded
         */
        authUser(){
            return this.$store.dispatch('storeUserData')
        },

        /**
         *There are two ways how this functions works:
         *First - if item is already selected and it's clicked again it sets currentlySelectedItemId to null
         *Secound - if item is not selected, it gets it's id and and sets currentlySelectedItemId to newly obtained id
         */
        selectItem(e){
           this.currentlySelectedItemId = e
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

