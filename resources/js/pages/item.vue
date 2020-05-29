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
                <v-responsive :aspect-ratio="3/2"
                min-height="500"
                >
                    <h1 class="font-weight-bold ma-2 display-1">{{ product.itemName }}</h1>

                    <!--Rating and number of reviews -->
                    <v-row class = "d-inline-flex ml-2" id ="test">
                        <v-rating v-model="product.OverAllrating"></v-rating>
                        <p class = "overline mt-3 ml-2" v-if="allReviews.length == 1">{{ allReviews.length }} ocena</p>

                        <p class = "overline mt-3 ml-2" v-if="allReviews.length == 2">{{ allReviews.length }} oceni</p>

                        <p class = "overline mt-3 ml-2" v-else>{{ allReviews.length }} ocen</p>
                    </v-row>

                    <v-responsive
                    :aspect-ratio="1/1"
                    >
                        <img class="product_img"
                        height="200"
                        v-if="selectedImage"
                        :src='"http://127.0.0.1:8000/storage/"+selectedImage'
                        >

                        <img class="product_img"
                        height="200"
                        v-else
                        :src='"http://127.0.0.1:8000/storage/products/"+product.dir+"/"+product.primaryImg'
                        >
                    </v-responsive>

                    <v-row>
                        <v-col
                        v-for="image in images"
                        :key="image"
                        cols="2"
                        >
                            <img
                            height="100"
                            width="100"
                            @click="selectImage(image)"
                            :src='"http://127.0.0.1:8000/storage/"+image'
                            >
                        </v-col>
                    </v-row>
                </v-responsive>
            </v-col>

            <!--Add to cart part-->
            <v-col
            class = "test"
            >
               <v-card
               min-height="400"
               height="100%"
               >
                <h2 class="headline font-weight-bold">{{ product.itemName }}</h2>
                <v-btn
                @click="addToCart(product)"
                rounded
                color="error"
                >V košarico</v-btn>
               </v-card>
            </v-col>
        </v-row>

        <v-divider></v-divider>
        <!--Item description -->
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
                        Opis: {{ product.itemDescription }}
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item>
                        Cena: {{ product.itemPrice}}
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item>
                        Dimenzija: {{ product.dimensions }}
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>

        <v-divider></v-divider>
        <!--Reviews-->
        <v-row class = "test">
            <v-col
            v-for="review in allReviews"
            :key="review.id"
            cols="12"
            >
                <v-card
                height="100"
                >
                    {{ review }}
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import route from '../routes/router.js'
import store from '../store/index'
import api from '../services/api.js'
import Axios from 'axios'

export default {
    data(){
        return{
            product: '',
            allReviews: '',
            images: '',
            selectedImage: ''
        }
    },
    methods:{
        getItemData(){
            let id = this.$route.params.id
            api.getProductData(id)
            .then((results)=>{
                this.product = results.data.data[0]
            })
        },
        /**
         * Calls function in vuex that adds item to cart
         * @param {Object} e selected product
         */
        addToCart(e){

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
        /**
         * Get all review for this item
         */
        getReviews(){
            let id = this.$route.params.id
            Axios.get('/api/item/'+id+'/reviews')
            .then((results)=>{
                this.allReviews = results.data.data
            })
        },

        getImages(){
            let id = this.$route.params.id
            Axios.get('/api/item/'+id+"/images")
            .then((results)=>{
                this.images = results.data
            })
        },
        selectImage(e){
            this.selectedImage = e
        }
    },
    mounted(){
        this.getItemData(),
        this.getReviews(),
        this.getImages()
    }
}
</script>

<style>

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
