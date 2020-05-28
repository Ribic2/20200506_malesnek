<template>
  <v-container>
    <v-card
    class="mx-auto mt-12"
    width="500"
    height="600"
    >
      <v-card-title>
        Registracija
      </v-card-title>

      <v-card-text>
        <v-form
        id="login_form"
        method="POST"
        action="/user/register"
        >

            <v-text-field
            label="Ime"
            v-model="name"
            prepend-icon="mdi-alpha-n"
            ></v-text-field>

            <v-text-field
            label="Priimek"
            v-model="surname"
            prepend-icon="mdi-alpha-s"
            ></v-text-field>

            <v-text-field
            label="E-naslov"
            v-model="email"
            prepend-icon="mdi-account-circle"
            ></v-text-field>

            <v-text-field
            label="Geslo"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
  	        :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock"
            ></v-text-field>

            <v-text-field
            label="Telefonska številka"
            v-model="phone"
            prepend-icon="mdi-phone"
            ></v-text-field>

          <v-card-actions>
            <v-btn
            width="100%"
            type="button"
            @click="registerAction"
            >Prijavi se</v-btn>

          </v-card-actions>
        </v-form>


        <v-alert type="error" v-if="response != ''">
            {{response}}
        </v-alert>

      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            //Credentials
            password: '',
            email: '',
            phone: '',
            name: '',
            surname: '',
            response: '',
            //Other variables
            showPassword: false
        }
    },
    methods:{
        registerAction(){

            var credentials = {
                password: this.password,
                email: this.email,
                phone: this.phone,
                name: this.name,
                surname: this.surname,
            }

            Axios.post('/api/user/register', credentials)
            .then((response)=>{
                console.log(response.data)
            })



        }
    }

}
</script>
