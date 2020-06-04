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

                    <h1 class="font-weight-bold ma-2 display-1">{{ product.itemName }}</h1>

                    <!--Rating and number of reviews -->
                    <v-row class = "d-inline-flex ml-2">
                        <v-rating v-model.number='product.OverAllrating'></v-rating>
                        <p class = "overline mt-3 ml-2" v-if="allReviews.length == 1">{{ allReviews.length }} ocena</p>

                        <p class = "overline mt-3 ml-2" v-if="allReviews.length == 2">{{ allReviews.length }} oceni</p>

                        <p class = "overline mt-3 ml-2" v-else>{{ allReviews.length }} ocen</p>
                    </v-row>


                    <v-row>
                        <v-col>
                            <v-responsive
                            :aspect-ratio="16/9"
                            >
                                <v-carousel
                                hide-delimiters
                                show-arrows-on-hover
                                v-model="currentIndex"
                                hide-delimiter-background
                                >
                                    <v-carousel-item
                                    v-for="(image, i) in images"
                                    :key="i"
                                    :src='"http://127.0.0.1:8000/storage/"+image'
                                    ></v-carousel-item>



                                </v-carousel>

                            </v-responsive>
                        </v-col>
                    </v-row>

                    <!--images-->
                    <v-row>
                        <v-col
                        v-for="(image, i) in images"
                        :key="i"
                        cols="2"
                        >
                            <img
                            v-if="currentIndex == i"
                            height="100"
                            width="100"
                            class="selected_image_in_carousel"
                            :src='"http://127.0.0.1:8000/storage/"+image'
                            >

                            <img
                            v-else
                            height="100"
                            width="100"
                            @click="selectImage(i)"
                            :src='"http://127.0.0.1:8000/storage/"+image'
                            >
                        </v-col>
                    </v-row>

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
        <!-- User adds new review -->
        <v-row v-if="$store.state.user.LoginStatus == true">
            <v-col cols="12">
                <v-card
                height="350"
                >
                    <h3
                    class="ma-5"
                    >Dodaj oceno</h3>
                    <v-form
                    method="POST"
                    class="ma-5"
                    >
                        <div>
                            <v-rating v-model="rating"></v-rating>
                        </div>

                        <v-textarea
                        outlined
                        no-resize
                        v-model="comment"
                        >

                        </v-textarea>

                        <v-btn
                        class="float-right"
                        @click="addReviews(product)"
                        >Oddaj oceno</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
        <!--Is he is not logged in he is not able to add review-->
        <v-row v-else>
            <v-col
            cols="12"
            >
                <v-card>
                    <h3>Če hočes oddati oceno se moraš registrirati!</h3>
                </v-card>
            </v-col>
        </v-row>


        <!--Reviews-->

        <v-card v-if="allReviews.length == 0">
            <h1>Ta izdelek nima nobenih ocen.</h1>
        </v-card>
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
            images: [],
            currentIndex: '',
            rating: 0,
            comment: '',

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

        //Removes first primary image and re-adds it to first place of the array
        getImages(){
            let id = this.$route.params.id
            Axios.get('/api/item/'+id+"/images")
            .then((results)=>{
                this.images = results.data
                if(!this.images.length < 2){
                    let primaryImageIndex = this.images.indexOf("products/"+this.product.dir+"/"+this.product.primaryImg)
                    this.images.splice(primaryImageIndex)
                    this.images.unshift("products/"+this.product.dir+"/"+this.product.primaryImg)
                }

            })
        },
        //Selects the image
        selectImage(e){
            this.currentIndex = e
        },
        addReviews(e){
            var credentials = {
                "Comment" : this.comment,
                "Rating" : this.rating,
                "productId": e.itemId,
                "Name": this.$store.state.user.Name,
                "Surname": this.$store.state.user.Surname,
                "Email": this.$store.state.user.Email
            }

            Axios.post('/api/review/add', credentials)
            .then((results)=>{
                if(results.data){
                    this.getReviews()
                    this.getItemData()
                }
            })

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
    .product_image{
        height: 100%;
        width: 100px;
    }
    #itemDescription{
        height: 500px;
    }
    .selected_image_in_carousel{
        transition: 0.1s;
        -webkit-box-shadow: 5px 0px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    }
</style>
