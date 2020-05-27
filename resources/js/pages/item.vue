<template>
    <v-container
    id="container"
    >
        <v-row>
            <v-col
            class = "test"
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            >
                <v-responsive :aspect-ratio="3/2">
                    <img class="product_img">
                </v-responsive>
            </v-col>
            <v-col
            class = "test"
            >
               <v-card
               height="100%"
               >
                <h2 class="headline">{{ product[0].itemName }}</h2>

                <v-btn
                @click="addToCart(product)"
                rounded
                color="error"
                >V košarico</v-btn>
               </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            id="itemDescription"
            class = "test">
                <v-card
                height="100%"
                >
                <h1>Opis izdelka</h1>
                <v-list>
                    <v-divider></v-divider>
                    <v-list-item>
                    Opis: {{ product[0].itemDescription }}
                    </v-list-item>
                      <v-divider></v-divider>
                    <v-list-item>
                    Cena: {{ product[0].itemPrice}}
                    </v-list-item>
                      <v-divider></v-divider>
                    <v-list-item>
                    Dimenzija: {{ product[0].dimensions }}
                    </v-list-item>
                </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import route from '../routes/router.js'
import store from '../store/index'
import api from '../services/api.js'

export default {
    data(){
        return{
            product: ''
        }
    },
    methods:{
        getItemData(){
            let id = this.$route.params.id
            api.getProductData(id)
            .then((results)=>{
                this.product = results.data.data
            })
        },
        /**
         * Calls function in vuex that adds item to cart
         * @param {Object} e selected product
         */
        addToCart(e){
            console.log(e)
            //If cart is empty adds item
            if(this.$store.state.cart.cart.length < 1){
                return this.$store.dispatch('addProduct', {product: e[0], quantity: 1})
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
                return this.$store.dispatch('addProduct', {product: e[0], quantity: 1})
            }
        },
    },
    mounted(){
        this.getItemData()
    }
}
</script>

<style>
    .test{
        border: solid 1px black;
    }
    #container{
        width: 80%;
    }
    .product_img{
        border: solid 1px black;
        height: 100%;
        width: 100%;
    }
    #itemDescription{
        height: 500px;
    }
</style>
