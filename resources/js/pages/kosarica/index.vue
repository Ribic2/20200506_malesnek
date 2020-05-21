<template>
  <v-container>
    <v-stepper v-model="counter">
      <!--Header -->
      <v-stepper-header>
        <v-stepper-step :complete="counter > 1" step="1">Košarica</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="counter > 2" step="2">Podatki o dostavi</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Način dostave in plačila</v-stepper-step>
      </v-stepper-header>
      <!--Content-->

      <v-stepper-items>
          <v-stepper-content step="1">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            min-height="300"
          >
          <items></items>
          </v-card>

          <v-btn
          text
          class="float-right"
          >Prekini</v-btn>
          <v-btn
            class="float-right"
            color="primary"
            @click="counter = 2"
          >
            Nadaljuj
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          >
          <credentials></credentials>
          </v-card>
          <v-btn
          @click="counter=1"
          >Nazaj</v-btn>

          <v-btn
          class="float-right"
          text
          >Prekini</v-btn>
          <v-btn
            class="float-right"
            color="primary"
            @click="counter = 3"
          >
          Nadaljuj
          </v-btn>


        </v-stepper-content>

        <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        >
        <paymentMethod></paymentMethod>
        </v-card>
        <v-btn
        @click="counter=2"
        >Nazaj</v-btn>
        <v-btn
        text
        class="float-right"
        >Prekini</v-btn>
        <v-btn
          color="primary"
          class="float-right"
          @click="dialog = true"
        >
        Oddaj
        </v-btn>
      </v-stepper-content>

      </v-stepper-items>
    </v-stepper>

    <!--Dialog that will be shown if action was succesfully completed-->
      <v-dialog
        width="400"
        v-model="dialog">

        <v-card>
          <div id="iconHolder">
            <v-icon
            size="250"
            color="green"
            >mdi-checkbox-marked-circle-outline</v-icon>
          </div>


          <v-card-text id = "cardText">Oddaja uspešno oddana!</v-card-text>
          <v-card-actions>

          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-container>
</template>

<script>

import store from '../../store/index'

import items from '../kosarica/items.vue'
import credentials from '../kosarica/credentials.vue'
import paymentMethod from '../kosarica/paymentMethod.vue'

export default {
  components:{
    items,
    credentials,
    paymentMethod,
  },
  data(){
    return{
      counter: 1,
      dialog: false,
    }
  }
}
</script>

<style scoped>
  #iconHolder{
    width: 70%;
    margin: 0 auto;
  }
  #iconHolder > * {
    width: 100%;
  }
  #cardText{
    text-align: center;
  }
  #comfirmButton{
    margin: 0 auto;
  }
</style>
