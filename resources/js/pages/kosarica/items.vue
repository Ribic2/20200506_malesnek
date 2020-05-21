<template>
    <v-container>

        <v-card v-for="cartItem in this.$store.state.cart.cart" v-bind:key="cartItem.itemId"
        height="200"
        class="mt-3"
        >
            <v-row id = "informationDisplay">
                <v-col
                class="test"
                cols="6"
                md="2"
                lg="2"
                sm="2"
                xl="2"
                >
                    <v-img
                    aspect-ratio="2/1"
                    class="productImg"
                    >
                    </v-img>
                </v-col>

                <v-col
                class="test"
                cols="6"
                xl="2"
                >
                    <p>{{ cartItem.product.itemName}}</p>
                </v-col>

                <v-col
                class="test"
                cols="2"
                >
                    {{ cartItem.quantity}}
                </v-col>

                <v-col
                class="test"
                cols="2"
                >
                    <p>{{ cartItem.product.itemPrice }}</p>
                </v-col>

                <v-col
                class="test"
                cols="2"
                >
                {{ cartItem.quantity *  cartItem.product.itemPrice}} &euro;
                </v-col>

                <v-col>
                    <v-btn
                    color="error"
                    @click="deleteCartProduct(cartItem.itemId)"
                    >
                        izbriši
                    </v-btn>
                    <v-btn-toggle
                    class = "quantityChangerHolder"
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

                </v-col>
            </v-row>

        </v-card>

    </v-container>
</template>

<script>
import store from '../../store/index'
import Axios from 'axios'
export default {

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
        }
    },
    mounted(){
        this.refreshCart()
    }
}
</script>

<style scoped>
    .test{
        border: solid 1px black;
    }
    .productImg{
        border: solid 1px black;
        height: 100%;
    }
    #informationDisplay{
        border: solid 1px red;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
    .quantityField{
        width: 50px;
        height: 100%;
    }
    .quantityChangerHolder{
        height: 57px;
    }
</style>
