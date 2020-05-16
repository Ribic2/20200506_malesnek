<template>
    <v-container>
        <v-row>
            <v-col
            v-for="product in getData"
            :key="product.itemName"
            cols="12"
            xl="3"
            >
                <v-card>
                    <v-responsive :aspect-ratio="4/5">
                        <v-card-title>{{ product }}</v-card-title>
                        <v-btn @click="addToCart(product)">Dodaj</v-btn>
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

        }
    },
    methods:{
        addToCart(e){
            console.log(e)
            return this.$store.dispatch('addProduct', e)
        },
        addData(){
            return this.$store.dispatch('getDataPerPage', 1)
        },
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

</style>

