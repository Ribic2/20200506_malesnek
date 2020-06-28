<template>
    <v-container>
        <v-card
        width="500"
        height="500"
        id="form"
        class="ma-auto"
        >
            <v-card-title>Spremeni geslo</v-card-title>
                <div class = "ma-2">
                    <label for="email">E-naslov</label>
                    <input type="email" id="email" class="form-control" placeholder="e-naslov" v-model="email" required>
                    <v-btn
                    color="primary mt-1"
                    @click="requestResetPassword"
                    width="100%"
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
            Axios.post("http://vidbukovec.si/api/reset-password", {email: this.email}).then(result => {
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
    #form{
        position: relative;
        top: 70px;
    }
</style>
