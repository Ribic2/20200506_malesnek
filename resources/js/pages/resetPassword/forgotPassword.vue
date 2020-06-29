<template>
    <v-container>
        <v-card
        class="mx-auto mt-12"
        width="500"
        height="500"
        :elevation="$vuetify.breakpoint.smAndDown ? 0 : 5"
        >
            <v-card-title>Spremeni geslo</v-card-title>
                <div class = "ma-2">

                    <v-text-field 
                    type="email" 
                    placeholder="e-naslov" 
                    v-model="email"
                    required
                    prepend-icon="mdi-email"
                    ></v-text-field>

                    <v-btn
                    @click="requestResetPassword"
                    width="100%"
                    class="mt-1"
                    rounded
                    color="#6C3FB8"
                    dark
                    >Spremeni geslo</v-btn>

                </div>
        </v-card>
    </v-container>
</template>

<script>
import Axios from 'axios';
export default {
    data() {
      return {
        email: null,
        has_error: false
      }
    },
    methods: {
        requestResetPassword() {
            Axios.post("/api/reset-password", {email: this.email}).then(result => {
                this.response = result.data;
                console.log(result.data);
            }, error => {
                console.error(error);
            });
        }
    }
}
</script>

<style scoped>
</style>
