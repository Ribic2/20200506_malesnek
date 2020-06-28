<template>
    <v-container>

         <v-app-bar>
            <v-toolbar-title>Naročila</v-toolbar-title>
            <v-spacer></v-spacer>
                <v-btn-toggle>
                    <v-btn
                    @click="filterLatest()"
                    >
                        <v-icon>mdi-filter-variant-plus</v-icon>
                    </v-btn>
                    <v-btn
                    @click="filterOldest()"
                    >
                        <v-icon>mdi-filter-variant-minus</v-icon>
                    </v-btn>
                    <v-btn
                    @click="filterCompleted()"
                    >
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                    <v-btn
                    @click="filterFinished()"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-btn
                    @click="getAllItems()"
                    >
                        <v-icon>mdi-all-inclusive</v-icon>
                    </v-btn>
                </v-btn-toggle>
        </v-app-bar>

        <v-row>
            <v-col
            cols="12"
            lg="4"
            md="6"
            sm="12"
            v-for="order in getData()"
            v-bind:key="order.idOrders"
            >
                <v-card

                height="500"
                >
                    <v-responsive :aspect-ratio="4/3">
                        <v-card-title
                        class="title"
                        >
                        {{ order.OrderId}}
                        </v-card-title>
                        <v-card-text>
                            <p>Datum narocila: {{ order.Created_at }}</p>
                            <p>Ime in priimek: {{ order.User[0].Name }} {{ order.User[0].Surname}}</p>
                            <p>Naslov: {{ order.User[0].Region }}<br> {{ order.User[0].houseNumberAndStreet }} <br>{{ order.User[0].Postcode }}</p>
                        </v-card-text>

                        <v-simple-table
                        height="200"
                        >
                            <thead>
                                <tr>
                                    <th>Ime izdelka</th>
                                    <th>Količina</th>
                                    <th>Vsota</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in order.Items" :key="item.itemId">
                                    <td>
                                        {{ item.item[0].itemName}}
                                    </td>
                                    <td>
                                        {{ item.quantity }}
                                    </td>
                                    <td>
                                        {{ parseFloat(item.item[0].itemPrice * item.quantity).toFixed(2) }} &euro;
                                    </td>
                                </tr>
                            </tbody>
                        </v-simple-table>

                        <v-card-actions v-if="!order.DeliveryStatus">
                            <v-btn
                            @click="confirmOrder(order.OrderId)"
                            >Potrditev</v-btn>

                            <v-btn
                            @click="orderDenied(order.OrderId)">
                            Zavrni</v-btn>
                        </v-card-actions>
                        <v-card-text v-else>
                            <p>Naročilo je bilo potrjeno.</p>
                        </v-card-text>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from '../../services/api'
import Axios from 'axios'

export default {
    methods:{
        getAllItems(){
           return this.$store.dispatch('getOrders')
        },
        getData(){
            return this.$store.state.admin.orders;
        },
        filterFinished(){
            return this.$store.dispatch('filterFinished')
        },
        filterCompleted(){
            return this.$store.dispatch('filterComplete')
        },
        filterOldest(){
            return this.$store.dispatch('filterOldest')
        },
        filterLatest(){
            return this.$store.dispatch('filterLatest')
        },
        confirmOrder(e){
            Axios.post('http://vidbukovec.si/api/Order/confirm', {confirmation: e})
            .then((results)=>{
                this.filterFinished()
            })
        },
        orderDenied(e){
            Axios.post('http://vidbukovec.si/api/Order/denied', {id: e})
            .then((results)=>{
                this.filterFinished()
            })
        }

    },
    mounted(){
        this.getAllItems()
    }
}
</script>
