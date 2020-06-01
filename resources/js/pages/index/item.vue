<template>

  <v-container>

      <v-card v-if="currentlySelectedItemId==product.itemId">
    <v-responsive :aspect-ratio="4/5">
      <v-card-title @click="redirectToItemPage(product)">{{ product.itemName }}</v-card-title>
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

        <v-btn @click="addToCart(product)" rounded color="error">V košarico</v-btn>

        <v-btn icon @click="addToFavourites(product)">
          <v-icon>mdi-star</v-icon>
        </v-btn>
      </v-card-actions>
    </v-responsive>
  </v-card>

  <v-card v-else>
    <v-responsive :aspect-ratio="4/5">
      <v-card-title @click="redirectToItemPage(product)">{{ product.itemName }}</v-card-title>
      <v-img
        @click="redirectToItemPage(product)"
        class="productImage ma-2"
        :aspect-ratio="1/1"
        :src='"http://127.0.0.1:8000/storage/products/"+product.dir+"/"+product.primaryImg'
      ></v-img>

      <v-card-actions class="card-actions">
        <v-btn @click="selectItem(product.itemId)" rounded>Podrobnosti</v-btn>

        <v-btn @click="addToCart(product)" rounded color="error">V košarico</v-btn>

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
            //If cart is empty adds item
            if(this.$store.state.cart.cart.length == 0){
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
