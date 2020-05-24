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

                <div id = "filterButtonHolder">
                    <v-btn-toggle class="ma-2">
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
                <v-card v-if="currentlySelectedItemId==product.itemId"

                >
                    <v-responsive :aspect-ratio="4/5">
                        <v-card-title>{{ product.itemName }}</v-card-title>
                        <p class="text-justify mr-3 ml-3">{{ product.itemDescription }}</p>
                        <p class="text-justify mr-3 ml-3">Cena {{ product.itemPrice }} &euro;</p>
                        <v-card-actions class="card-actions">

                            <v-btn
                            @click="selectItem(null)"
                            rounded
                            >Podrobnosti</v-btn>

                            <v-btn
                            @click="addToCart(product)"
                            rounded
                            color="error"
                            >V košarico</v-btn>

                            <v-btn
                            icon
                            @click="addToFavourites(product)">
                                <v-icon>mdi-star</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-responsive>
                </v-card>

                <v-card

                v-else
                >
                    <v-responsive :aspect-ratio="4/5">
                        <v-card-title>{{ product.itemName }}</v-card-title>
                        <v-img
                        class = "productImage ma-2"
                        :aspect-ratio="1/1"
                        >
                        </v-img>

                        <v-card-actions class="card-actions">
                            <v-btn
                            @click="selectItem(product.itemId)"
                            rounded
                            >Podrobnosti</v-btn>

                            <v-btn
                            @click="addToCart(product)"
                            rounded
                            color="error"
                            >V košarico</v-btn>

                            <v-btn
                            @click="addToFavourites(product)"
                            icon
                            >
                                <v-icon>mdi-star</v-icon>
                            </v-btn>
                        </v-card-actions>
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
            //If cart is empty adds item
            if(this.$store.state.cart.cart.length < 1){
                return this.$store.dispatch('addProduct', {product: e, quantity: 1})
            }
            //If not then it checks cart products and check if newly added product is already in cart
            //If it's not it addes it
            //Else it returns false
            else{
                for(var i = 0; i < this.$store.state.cart.cart.length;i++){
                    if(e.itemId == this.$store.state.cart.cart[i].product.itemId){
                       return false
                    }
                }
                //Turns item button to green and changes text
                //TODO
                return this.$store.dispatch('addProduct', {product: e, quantity: 1})
            }

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
         *There are two ways how this functions works:
         *First - if item is already selected and it's clicked again it sets currentlySelectedItemId to null
         *Secound - if item is not selected, it gets it's id and and sets currentlySelectedItemId to newly obtained id
         */
        selectItem(e){
           this.currentlySelectedItemId = e
        },

        /**
         * Sends request to Vuex that will store newly added favourite item
         * @param {OBJECT} e
         */
        addToFavourites(e){
            this.$store.dispatch('addToFavourites', e)
        }
    },
    computed:{
        getData(){
            return this.$store.state.products.products
        },

    },
    mounted(){
        this.addData()
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
        border: Solid 1px black;
        position: relative;
        bottom: 15px;
    }
</style>

