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
            md="12"
            lg="6"
            >

                    <h1 class="font-weight-bold ma-2 display-1">{{ product.itemName }}</h1>

                    <!--Rating and number of reviews -->
                    <v-row class = "d-inline-flex ml-2">
                        <v-rating
                        v-model.number='product.OverAllrating'
                        readonly
                        ></v-rating>
                        <p class = "overline mt-3 ml-2" v-if="allReviews.length == 1">{{ allReviews.length }} ocena</p>

                        <p class = "overline mt-3 ml-2" v-else-if="allReviews.length == 2">{{ allReviews.length }} oceni</p>

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
                                    :aspect-ratio="16/9"
                                    v-for="(image, i) in images"
                                    :key="i"
                                    lazy-src="https://picsum.photos/id/11/100/60"
                                    :src='"http://vidbukovec.si/storage/"+image'
                                    ></v-carousel-item>



                                </v-carousel>

                            </v-responsive>
                        </v-col>
                    </v-row>

                    <!--images-->
                    <v-row  v-if="this.windowWidth > 800">
                        <v-col
                        class="images"
                        v-for="(image, i) in images"
                        :key="i"
                        cols="2"
                        md="3"
                        sm="3"
                        >
                            <img
                            v-if="currentIndex == i"
                            height="100"
                            width="100"
                            class="selected_image_in_carousel"
                            :src='"http://vidbukovec.si/storage/"+image'
                            >

                            <img
                            v-else
                            height="100"
                            width="100"
                            @click="selectImage(i)"
                            :src='"http://vidbukovec.si/storage/"+image'
                            >
                        </v-col>
                    </v-row>

            </v-col>

            <!--Add to cart part-->
            <v-col
            class = "test"
            >
               <v-card
               max-height="400"
               min-height="200"
               >
                <v-card-title>
                    <p class="headline">{{ product.itemName }}</p>
                </v-card-title>

                <v-card-text v-if="product.Quantity > 0">
                    <p v-if="product.Quantity > 0">Izdelek je na voljo.</p>
                    <p v-else>Izdelek ni na voljo.</p>
                </v-card-text>

                <v-card-actions class="card-actions">
                    <!-- Add to cart button logic-->
                    <v-btn
                    @click="addToCart(product)"
                    color="error"
                    v-if="$store.state.cart.cart == null"
                    >V košarico</v-btn>

                    <v-btn
                    @click="addToCart(product)"
                    color="success"
                    v-else-if="$store.state.cart.cart.find(o=> o.product.itemId === product.itemId)"
                    >Dodano</v-btn>

                    <v-btn
                    @click="addToCart(product)"
                    color="error"
                    v-else
                    >V košarico</v-btn>

                    <!-- Add to favourits button logic -->
                    <v-btn
                    @click="addToFavourites(product)"
                    icon
                    v-if="$store.state.favourites.favouriteItem == null"
                    >
                    <v-icon>mdi-star</v-icon>
                    </v-btn>

                    <v-btn
                    icon
                    @click="addToFavourites(product)"
                    color="blue"
                    v-else-if="$store.state.favourites.favouriteItem.find(o=> o.itemId === product.itemId)"
                    >
                    <v-icon>mdi-star</v-icon>
                    </v-btn>

                    <v-btn @click="addToFavourites(product)" icon v-else>
                    <v-icon>mdi-star</v-icon>
                    </v-btn>
                </v-card-actions>
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
                height="450"
                >
                    <h1 class="headline descriptionTitle">Opis izdelka</h1>
                    <v-list>

                        <v-list-item>
                        Opis: {{ product.itemDescription }}
                        </v-list-item>

                        <v-list-item>
                        Cena: {{ product.itemPrice}}
                        </v-list-item>

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
                    class="ma-5 pt-5 headline"
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
                        id="addReviewButton"
                        color="primary"
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
                height="200"
                >

                    <v-row class = "test">
                        <v-col
                        cols="12">
                            <v-rating
                            readonly
                            v-model="review.rating"
                            ></v-rating>
                        </v-col>
                    </v-row>

                    <v-row class = "test">
                        <v-col
                        cols="12">
                            <p class="ml-2"><span class = "font-weight-bold">{{ review.Name }} {{ review.Surname }}</span>  {{ review.postTime }}</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                        >
                            <p
                            class="ml-2 mb-10"
                            >{{ review.comment }}</p>
                        </v-col>
                    </v-row>
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
            windowWidth: '',
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
            return this.$store.dispatch('addProduct', e)
        },
        addToFavourites(e){
            this.$store.dispatch('addToFavourites', e)
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
            Axios.get('http://vidbukovec.si/api/item/'+id+"/images")
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

        },
        windowWidthWatcher(){
            if(this.windowWidth == ''){
                this.windowWidth = window.innerWidth
            }

            window.addEventListener('resize', () => {
                this.windowWidth = window.innerWidth
            })

        }
    },
    mounted(){
        this.getItemData(),
        this.getReviews(),
        this.getImages(),
        this.windowWidthWatcher()
    }
}
</script>

<style>

    #container{
        width: 80%;
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
    #addReviewButton{
        position: relative;
        bottom: 15px;
    }
    .descriptionTitle{
        position: relative;
        left: 10px;
        top: 10px;
    }
</style>
