<template>
    <v-container
    id="container"
    >
        <v-alert type="error" v-if="error == true">
            Nekateri izdelki so bili odstranjeni iz košarice, ker niso več na zalogi.
        </v-alert>
        <div v-if="this.$store.state.cart.cart.length == 0">
            <v-card
            id = "emptyCart"
            elevation="0"
            >
                <div id = "cartHolder">
                    <v-icon
                    size="100"
                    id="cartIcon"
                    >
                    mdi-cart</v-icon>
                </div>
                <h3 class="text-center">Košarica je prazna!</h3>
                <p class="text-center">Zgleda da je vaša košarica prazna.</p>
            </v-card>
        </div>
        <div v-else>
            <v-card v-for="cartItem in this.$store.state.cart.cart" v-bind:key="cartItem.itemId"
            min-height="200"
            class="mt-3"
            >
                <v-row id = "informationDisplay">
                    <v-col
                    cols="6"
                    md="2"
                    lg="2"
                    sm="2"
                    xl="2"
                    >
                        <v-img
                        :aspect-ratio="4/3"
                        class="productImg"
                        :src='"http://127.0.0.1:8000/storage/products/"+cartItem.product.dir+"/"+cartItem.product.primaryImg'
                        >
                        </v-img>
                    </v-col>

                    <v-col
                    cols="6"
                    xl="2"
                    >
                        <p class="title">Ime izdelka</p>
                        <p class = "headline">{{ cartItem.product.itemName}}</p>
                    </v-col>

                    <v-col
                    cols="2"
                    >
                        <p class="title">Količina</p>
                        <p class = "headline">{{ cartItem.quantity}}</p>
                    </v-col>

                    <v-col
                    cols="2"
                    >
                        <p class="title">Cena izdelka</p>
                        <p class = "headline">{{ cartItem.product.itemPrice }}  &euro;</p>
                    </v-col>

                    <v-col
                    cols="2"
                    >
                        <p class="title">Skupna cena</p>
                        <p class = "headline">Cena: {{cartItem.product.itemPrice * cartItem.quantity}} &euro;</p>
                    </v-col>

                    <v-col>
                        <v-btn-toggle
                        class = "quantityChangerHolder mb-1 mt-5"
                        rounded>
                            <v-btn height="56"
                            @click="changeQuantity(cartItem.product, cartItem.quantity, 'plus')"
                            ><v-icon>mdi-plus</v-icon></v-btn>

                            <v-text-field
                            flat
                            outlined
                            v-bind:value="cartItem.quantity"
                            class="quantityField"
                            >{{ cartItem.quantity }}</v-text-field>

                            <v-btn height="56"
                            @click="changeQuantity(cartItem.product, cartItem.quantity, 'minus')"
                            ><v-icon>mdi-minus</v-icon></v-btn>
                        </v-btn-toggle>

                        <br>

                        <!--Delete data from cart array -->
                        <v-btn
                        color="error"
                        class="mb-1 mt-5"
                        width="90%"
                        @click="deleteCartProduct(cartItem.itemId)"
                        >
                            izbriši
                        </v-btn>


                    </v-col>
                </v-row>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import store from '../../store/index'
import Axios from 'axios'
export default {
    data(){
        return{
            error: false
        }
    },
    methods:{

        refreshCart(){
            return this.$store.dispatch('checkLocalStorageCart')
        },
        /**
         * Removes item from cart array
         * @param {INTEGER} e id of the item that will be removed from cart array
         */
        deleteCartProduct(e){
            return this.$store.dispatch('deleteProductFromCart', e)
        },

        /**
         * Sends request to vuex to change quantity
         * @param {OBJECT} e product data
         * @param {INTEGER} f quantity
         * @param {STRING} z status on what to do either decrease or increase
         */
        changeQuantity(e, f, z){
            this.$store.dispatch('changeQuantity', {product: e, quantity: f, status: z})
        },
        /**
         * Checks if item is avaiable
         */
        checkItemsQuantity(){
            if(this.$store.state.cart.cart == null || this.$store.state.cart.cart.length == 0){
                return false;
            }
            else{
                Axios.post('/api/check/cart', {cart: this.$store.state.cart.cart})
                .then((results)=>{

                    for(let i = 0; i < results.data.length; i++){
                       for(let x = 0; x < this.$store.state.cart.cart.length; x++){
                           if(this.$store.state.cart.cart[x].product.itemId == results.data[i]){
                               this.$store.state.cart.cart.splice(x,1)
                               this.error = true
                           }
                       }
                    }

                    localStorage.setItem('cartStorage', JSON.stringify(this.$store.state.cart.cart))
                })
            }
        }
    },
    mounted(){
        this.refreshCart(),
        this.checkItemsQuantity()
    }
}
</script>

<style scoped>
    .test{
        border: solid 1px black;
    }
    .productImg{
        height: 100%;
    }
    #informationDisplay{
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
    .quantityField{
        width: 50px;
        height: 100%;
    }
    #container{
        min-height: 500px;
    }
    .quantityChangerHolder{
        height: 57px;
    }
    #emptyCart{
        width: 100%;
        height: 100% !important;
        position: relative;
    }
    #cartIcon{
        position: relative;
        vertical-align: middle;
        height: 100%;
        width: 100%;
    }
    #cartHolder{
        width: 5%;
        margin: 0 auto;
    }
</style>
