<template>
    <v-container
    v-scroll="onScroll">
        <v-card
        color="#6C3FB8"
        dark
        >
            <v-card-actions>
                <v-card-title>Trgovina</v-card-title>
                <v-btn
                v-if="getCategories.length != 0"
                icon
                @click="show = !show"
                >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>
            <v-expand-transition v-if="getCategories.length != 0">
                <div v-show="show" id = "filter">

                    <div id = "filterButtonHolder">
                            <v-btn
                            rounded
                            color="#6C3FB8"
                            elevation="0"
                            class="ma-2"
                            @click="getAllProducts()"
                            >
                            Vsi izdelk   
                            </v-btn>
                            <v-btn
                            rounded
                            class="ma-2"
                            v-for="category in getCategories" v-bind:key="category.Categorie"
                            color="#6C3FB8"
                            elevation="0"
                            @click="getCategorySpecificItems(category.Categorie)"
                            >
                            {{ category.Categorie }}
                            </v-btn>
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
            lg="6"
            md="6"
            >
                <item
                v-bind:product="product"
                ></item>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import store from '../../store/index'
import router from '../../routes/router'

import item from '../index/item.vue'

export default {
    components:{
        item
    },
    data(){
        return{
            show: false,
            currentlySelectedItemId: null,
        }
    },
    methods:{
        /**
         * Calls function in Vuex storage that adds
         * new products to products array
         * ONLY ADDS products of 1st page!
         */
        addData(){
            if(this.$store.state.products.products.length == 0){
                return this.$store.dispatch('getDataPerPage', 1)
            }
            return false;
        },
        //When user scrolls to the bottom of the page api is called
        onScroll (e) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

                if(this.$store.state.products.stopApiCalls == false){
                    return this.$store.dispatch('getDataPerPage', this.$store.state.products.counter)
                }
            }
        },
        getCategoriesApi(){
            this.$store.dispatch('getCategories')
        },
        getCategorySpecificItems(e){
            return this.$store.dispatch('filterItemsByCategory', e)
        },
        /**
         * Gets all products from 1st page
         */
        getAllProducts(){
           return this.$store.dispatch('getDataPerPage', 1)
        }
    },
    computed:{
        getData(){
            return this.$store.state.products.products
        },
        getCategories(){
            return this.$store.state.products.categories
        }

    },
    mounted(){
        this.addData(),
        this.getCategoriesApi()
        
    }
}
</script>

<style scoped>
    .card-actions {
        position: absolute;
        padding-top: 10px;
        bottom: 0;
    }
    .productImage{
        position: relative;
        bottom: 15px;
    }
</style>

