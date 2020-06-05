<template>

  <v-container>
    <v-hover
    v-slot:default="{ hover }"
    >
        <v-card
        :elevation="hover ? 12 : 2">
        <v-responsive :aspect-ratio="77/100">

                    <!--title-->
                    <v-card-actions>
                        <v-card-title
                        @click="redirectToItemPage(product)"
                        class="headline"
                        >{{ product.itemName }}</v-card-title>

                        <v-chip
                        v-if="product.isOnSale"
                        class="ma-2"
                        color="red"
                        text-color="white"
                        >
                        Znižanje
                        </v-chip>
                    </v-card-actions>

                <transition name="fade" mode="out-in">
                    <div v-if="currentlySelectedItemId==product.itemId">
                        <p
                        class="text-justify mr-3 ml-3 body-2"
                        @click="redirectToItemPage(product)"
                        >{{ product.itemDescription }}</p>

                        <p
                            class="text-justify mr-3 ml-3"
                            @click="redirectToItemPage(product)"
                        >Cena: {{ product.itemPrice }} &euro;</p>

                        <!--If item is aviable-->
                        <v-chip
                        v-if="product.Quantity > 0"
                        class="ma-2"
                        color="green"
                        text-color="white"
                        >
                        Izdelek je na voljo
                        </v-chip>

                        <v-chip
                        v-else
                        text-color="white"
                        color="error">
                        Izdelek ni na zalogi
                        </v-chip>

                    </div>

                    <v-img
                    v-else
                        @click="redirectToItemPage(product)"
                        class="productImage ma-2"
                        :aspect-ratio="1/1"
                        :src='"http://127.0.0.1:8000/storage/products/"+product.dir+"/"+product.primaryImg'
                    ></v-img>
                </transition>

                <v-card-actions class="card-actions">
                    <v-btn
                    v-if="currentlySelectedItemId==product.itemId"
                    color="primary"
                    @click="selectItem(null)"
                    >Podrobnosti</v-btn>

                    <v-btn
                    v-else
                    color="primary"
                    @click="selectItem(product.itemId)"
                    >Podrobnosti</v-btn>


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
            </v-responsive>
        </v-card>
   </v-hover>
  </v-container>
</template>

<script>
import store from '../../store/index'

export default {
    props: [
        'product'
    ],
    data(){
        return{
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
         * When item is clicked it gets reditected to /izdelek/:id.
         * On that page it displays all the item information.
         */
        redirectToItemPage(e){
            this.$router.push({path: `/izdelek/${e.itemId}`})
        },

        /**
        * Sends request to Vuex that will store newly added favourite item
        * @param {OBJECT} e
        */
        addToFavourites(e){
            this.$store.dispatch('addToFavourites', e)
        },
        /**
        *There are two ways how this functions works:
        *First - if item is already selected and it's clicked again it sets currentlySelectedItemId to null
        *Secound - if item is not selected, it gets it's id and and sets currentlySelectedItemId to newly obtained id
        */
        selectItem(e){
            this.currentlySelectedItemId = e


        },

    }
}
</script>

<style>
  .card-actions {
        position: absolute;
        padding-top: 10px;
        bottom: 0;
    }
    .productImage{
        position: relative;
        bottom: 15px;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
        filter: blur(8px);
        -webkit-filter: blur(8px);
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;

    }
</style>
