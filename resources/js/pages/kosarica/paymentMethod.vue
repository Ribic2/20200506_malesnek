<template>
    <v-container>
        <div v-if="this.$store.state.user.isAuth == true">
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>Kreditna kartica</v-expansion-panel-header>

                    <v-expansion-panel-content>
                        <div id='app'>

                                <v-text-field v-model="nameOnCard" label = "Name on card" type="text"/>
                                <card class='stripe-card'
                                :class='{ complete }'
                                stripe='pk_test_6GetaNtlFSAZ94wdJEcGR4vN0066MegJBC'
                                :options='stripeOptions'
                                @change='complete = $event.complete'
                                />
                                <button class='pay-with-stripe' @click='pay' :disabled='!complete'>Plačaj</button>

                        </div>
                    </v-expansion-panel-content>

                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>Paypal</v-expansion-panel-header>

                    <v-expansion-panel-content>
                       <paypal
                        :amount='fullPrice.toString()'
                        currency="USD"
                        env="sandbox"
                        :client="paypal"
                        >
                        </paypal>
                    </v-expansion-panel-content>

                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>Plačilo ob prevzetju</v-expansion-panel-header>

                    <v-expansion-panel-content>
                    Plačali boste za izdelke, ko jih dostavimo na dom.
                    <br>
                    <v-btn
                    @click="orderPayWhenRecived()"
                    color="primary"
                    >
                    Oddaj naročilo
                    </v-btn>
                    </v-expansion-panel-content>

                </v-expansion-panel>
            </v-expansion-panels>

            <!-- Checks which payment method was used Paypal or Stripe-->

            <v-alert
            type="error"
            v-if="error.length != 0"
            width="400"
            transition="fade-transition"
            >
            {{ error }}
            </v-alert>


            <v-overlay :value="overlay">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
        </div>
        <div v-else>
            <h1>You need to comfirm your mail first</h1>
        </div>
    </v-container>
</template>

<script>
import paypal from 'vue-paypal-checkout'
import { Card, createToken} from 'vue-stripe-elements-plus'
import route from '../../routes/router'
import Axios from 'axios'

export default {
    components: {
        Card,
        paypal,
    },
    data () {
        return {
            fullPrice: 0,
            nameOnCard: '',
            complete: false,
            stripeOptions: {
                hidePostalCode: true
            },
            paypal: {
                sandbox: 'Ad3yEDxZV7gwmFkDAtZqTMRODKM0OJEZJ2w7TZt5YWnEVnbciAQ2DrqpAsv5pPin6T85ITAftj0YchTX',
                production: 'Ad3yEDxZV7gwmFkDAtZqTMRODKM0OJEZJ2w7TZt5YWnEVnbciAQ2DrqpAsv5pPin6T85ITAftj0YchTX'
            },
            error: '',
            overlay: false
        }
    },
    methods: {
        pay () {
            createToken({name: this.nameOnCard})
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


                    this.overlay = true;
                    Axios.post('/api/order/add', {products: itemIds, userId: this.$store.state.user.userId, quantity: quantity, fullPrice: fullPrice, stripeToken: respond.token.id })
                    .then((results)=>{

                        if(results.data.itemsOutOfStock){
                            this.overlay = false;
                            this.error = "Nekateri izdelki niso na zalogi. Opravičujemo se za to napako."
                        }
                        else if(results.data){
                            this.dialog = true
                            this.overlay = false;
                            localStorage.removeItem('cartStorage')
                            this.$store.state.cart.cart = new Array();

                            //Redirects to /checkout
                            route.push({name:'checkout', replace: true})
                        }
                    })

            })
        },
        orderPayWhenRecived(){
                var itemIds = []
                var quantity = []
                var fullPrice = 0;
                var data = JSON.parse(localStorage.getItem('cartStorage'));


                for(let i = 0; i < data.length; i++){
                    itemIds.push(data[i].product.itemId)
                    quantity.push(data[i].quantity)
                    fullPrice+=data[i].quantity * data[i].product.itemPrice
                }

                this.overlay = true;
                Axios.post('/api/order/add', {products: itemIds, userId: this.$store.state.user.userId, quantity: quantity, fullPrice: fullPrice, typeOfPayment: 'home' })
                .then((results)=>{

                    if(results.data.itemsOutOfStock){
                        this.overlay = false;
                        this.error = "Nekateri izdelki niso na zalogi. Opravičujemo se za to napako."
                    }
                    else if(results.data){
                        this.overlay = false;
                        localStorage.removeItem('cartStorage')
                        this.$store.state.cart.cart = new Array();

                        //Redirects to /checkout
                        route.push({name:'checkout', replace: true})
                    }
                })
        },
        getFullPrice(){
            let data = JSON.parse(localStorage.getItem('cartStorage'));

            if(data == null || data.length == 0){
               return false;
            }
            else{
                for(let i = 0; i < data.length; i++){
                    this.fullPrice+=data[i].quantity * data[i].product.itemPrice
                }
                this.fullPrice.toString()
            }
        }
    },
    mounted(){
        this.getFullPrice()
    }
};
</script>

<style scoped>
#app{
    height: 200px;
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
    position: relative;
    top: 5px;
    margin: 0 auto;
}
.stripe-card.complete {
  border-color: green;
}
</style>
