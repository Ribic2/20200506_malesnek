<template>

  <v-container>
    <v-hover
    v-slot:default="{ hover }"
    >
        <v-card
        :elevation="hover ? 12 : 2"
        v-if="currentlySelectedItemId==product.itemId">
            <v-responsive :aspect-ratio="77/100">

                <!--title-->
                <v-card-actions>
                    <v-card-title @click="redirectToItemPage(product)">{{ product.itemName }}</v-card-title>

                    <v-chip
                    v-if="product.isOnSale"
                    class="ma-2"
                    color="red"
                    text-color="white"
                    >
                    Znižanje
                    </v-chip>
                </v-card-actions>


                <p
                    class="text-justify mr-3 ml-3"
                    @click="redirectToItemPage(product)"
                >{{ product.itemDescription }}</p>
                <p
                    class="text-justify mr-3 ml-3"
                    @click="redirectToItemPage(product)"
                >Cena {{ product.itemPrice }} &euro;</p>
                <v-card-actions class="card-actions">
                    <v-btn @click="selectItem(null)" rounded>Podrobnosti</v-btn>

                    <!--Add to cart button logic -->
                    <v-btn
                    @click="addToCart(product)"
                    rounded color="error"
                    v-if="$store.state.cart.cart == null"
                    >V košarico</v-btn>

                    <v-btn
                    @click="addToCart(product)"
                    rounded
                    color="success"
                    v-else-if="$store.state.cart.cart.find(o=> o.product.itemId === product.itemId)"
                    >Dodano</v-btn>

                    <v-btn
                    @click="addToCart(product)"
                    rounded
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



  <v-card
  :elevation="hover ? 12 : 2"
  v-else>
    <v-responsive :aspect-ratio="77/100">
        <v-card-actions>
            <v-card-title @click="redirectToItemPage(product)">{{ product.itemName }}</v-card-title>
            <v-chip
                v-if="product.isOnSale"
                class="ma-2"
                color="red"
                text-color="white"
                >
                Znižanje
            </v-chip>
        </v-card-actions>
        <v-img
            @click="redirectToItemPage(product)"
            class="productImage ma-2"
            :aspect-ratio="1/1"
            :src='"http://127.0.0.1:8000/storage/products/"+product.dir+"/"+product.primaryImg'
        ></v-img>

        <v-card-actions class="card-actions">
            <v-btn @click="selectItem(product.itemId)" rounded>Podrobnosti</v-btn>

            <!-- Add to cart button logic-->
            <v-btn
            @click="addToCart(product)"
            rounded color="error"
            v-if="$store.state.cart.cart == null"
            >V košarico</v-btn>

            <v-btn
            @click="addToCart(product)"
            rounded
            color="success"
            v-else-if="$store.state.cart.cart.find(o=> o.product.itemId === product.itemId)"
            >Dodano</v-btn>

            <v-btn
            @click="addToCart(product)"
            rounded
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
</style>
