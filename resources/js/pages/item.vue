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
            md="5"
            lg="5"
            >
                <v-responsive :aspect-ratio="3/2">
                    <img class="product_img">
                </v-responsive>
            </v-col>
            <v-col
            class = "test"

            >
                <v-responsive>
                    <h1>Add to cart</h1>
                </v-responsive>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            id="itemDescription"
            class = "test">
                {{ product }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import route from '../routes/router.js'
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
                this.product = results.data
            })
        }
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
