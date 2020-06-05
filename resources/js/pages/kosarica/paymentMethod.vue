<template>
    <v-container>
        <div v-if="this.$store.state.user.isAuth == true">

            <div id='app'>
                <h1>Please give us your payment details:</h1>
                    <card class='stripe-card'
                    :class='{ complete }'
                    stripe='pk_test_6GetaNtlFSAZ94wdJEcGR4vN0066MegJBC'
                    :options='stripeOptions'
                    @change='complete = $event.complete'
                    />
                    <button class='pay-with-stripe' @click='pay' :disabled='!complete'>Plačaj</button>
            </div>


            <v-alert
            type="success"
            v-if="dialog == true"
            width="400"
            transition="fade-transition"
            >
                Naročilo je bilo uspešno oddano!
            </v-alert>
        </div>
        <div v-else>
            <h1>You need to comfirm your mail first</h1>
        </div>

        <paypal
            amount="10.00"
            currency="USD"
            env="sandbox"
            :client="paypal"
        >
        </paypal>
    </v-container>
</template>

<script>
import paypal from 'vue-paypal-checkout'
import { Card, createToken } from 'vue-stripe-elements-plus'
import Axios from 'axios'

export default {
    components: {
        Card,
        paypal
    },
    data () {
        return {
            complete: false,
            dialog: false,
            stripeOptions: {
                hidePostalCode: true
            },
            paypal: {
                sandbox: 'Ad3yEDxZV7gwmFkDAtZqTMRODKM0OJEZJ2w7TZt5YWnEVnbciAQ2DrqpAsv5pPin6T85ITAftj0YchTX',
                production: 'Ad3yEDxZV7gwmFkDAtZqTMRODKM0OJEZJ2w7TZt5YWnEVnbciAQ2DrqpAsv5pPin6T85ITAftj0YchTX'
            }
        }
    },
    methods: {
        pay () {
            createToken()
            .then((respond)=> {

                    var itemIds = []
                    var quantity = []
                    var fullPrice = 0;
                    var data = JSON.parse(localStorage.getItem('cartStorage'));


                    for(let i = 0; i < data.length; i++){
                        itemIds.push(data[i].product.itemId)
                        quantity.push(data[i].quantity)

                        fullPrice+=data[i].quantity * data[i].product.itemPrice
                    }

                    Axios.post('/api/order/add', {products: itemIds, userId: this.$store.state.user.userId, quantity: quantity, fullPrice: fullPrice, stripeToken: respond.token.id })
                    .then((results)=>{
                        if(results.data){
                            this.dialog = true
                            localStorage.removeItem('cartStorage')
                            this.$store.state.cart.cart = new Array();
                        }
                    })

            })
        }
    }
};
</script>

<style scoped>
#app{
    height: 500px;
    background-color: #f6f9fc;
    max-width: 400px;
    width: auto;
}
.pay-with-stripe{
    display: block;
    width: 90%;
    height: 40px;
    background-color: #fcd669;
    border-radius: 20px;
    color: #525f7f;
    font-weight: 600;
    margin: 0 auto;
    margin-top: 10px;
    text-transform: uppercase;
    cursor: pointer;
}
.pay-with-stripe:active{
    background-color: #f5be58;
}
.stripe-card {
    width: 90%;
    height: 25px;
    background-color: #7488aa;
    color: white;
    border-radius: 20px;
    margin: 0 auto;
}
.stripe-card.complete {
  border-color: green;
}
</style>
