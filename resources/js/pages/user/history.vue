<template>
    <v-container>

        <v-expansion-panels>
            <v-expansion-panel v-for="order in $store.state.user.orderHistory" :key="order.idOrders">
                <v-expansion-panel-header class="headline">{{ order.Created_at.split(" ")[0].split('-').reverse().join('.') }}</v-expansion-panel-header>

                <v-expansion-panel-content>
                    <div v-for="item in order.Items" :key="item.itemId">
                        <v-row>
                            <v-col
                            cols="2"
                            >
                                <v-img
                                :aspect-ratio="4/3"
                                class="productImg"
                                :src='"http://127.0.0.1:8000/storage/products/"+item.item[0].dir+"/"+item.item[0].primaryImg'
                                >
                                </v-img>
                            </v-col>

                            <v-col
                            cols="10"
                            >
                                <p class="headline">{{ item.item[0].itemName }}</p>
                                <p>Količina: {{ item.quantity }}</p>
                                <p>Cena izdelka: {{ item.item[0].itemPrice }}&euro;</p>
                                <p>Skupna cena: {{ item.quantity * item.item[0].itemPrice }}&euro;</p>
                            </v-col>
                        </v-row>
                    </div>
                </v-expansion-panel-content>

            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
import Axios from 'axios'
import store from '../../store/index'

export default {
    data(){
        return{

        }
    },

    methods:{
        getUserHistory(){
            this.$store.dispatch('getUserOrderHistory')
        },
    },
    async mounted(){
        await this.getUserHistory()
    }
}
</script>
