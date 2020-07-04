<template>
    <v-container>
        <v-row v-if="$store.state.user.orderHistory == null || $store.state.user.orderHistory.length == 0">
            <empty
            icon="mdi-package"
            text="Nimate še nobenih naročil!"
            ></empty>
        </v-row>

        <v-expansion-panels v-else>
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
                                :src='migration[0].redirectURL+"storage/products/"+item.item[0].dir+"/"+item.item[0].primaryImg'
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
import empty from '../../components/empty.vue'
import Axios from 'axios'
import store from '../../store/index'
import migration from '../../../../migration.json'

export default {
    components:{
        empty
    },
    data(){
        return{
            migration: migration
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

<style scoped>
  
</style>
