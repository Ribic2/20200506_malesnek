<template>
  <v-container>
    <v-card
    class="mx-auto mt-12"
    width="500"
    :elevation="$vuetify.breakpoint.smAndDown ? 0 : 5"
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
            prepend-icon="mdi-account-circle"
            ></v-text-field>

            <v-text-field
            label="Priimek"
            v-model="surname"
            prepend-icon="mdi-smart-card"
            ></v-text-field>

            <v-text-field
            label="E-naslov"
            v-model="email"
            prepend-icon="mdi-email"
            ></v-text-field>

            <v-text-field
            label="Geslo"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
  	        :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            minLength="6"
            prepend-icon="mdi-lock"
            ></v-text-field>

            <v-text-field
            label="Telefonska številka"
            maxLength="9"
            v-model="phone"
            prepend-icon="mdi-phone"
            ></v-text-field>

          <v-card-actions>
          <v-btn
            width="100%"
            rounded
            color="#6C3FB8"
            dark
            @click="registerAction"
            >Registriraj se</v-btn>

          </v-card-actions>
        </v-form>


        <v-alert type="error" v-if="response != ''">
            {{response}}
        </v-alert>

      </v-card-text>
    </v-card>

      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>

  </v-container>
</template>

<script>
import Axios from 'axios'
import migration from '../../../../migration.json'
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
            showPassword: false,
            overlay: false,
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

           
            this.overlay = true
            Axios.post('/api/user/register', credentials)
            .then((results)=>{
                
                if(results.data.authentication){
                    axios.defaults.headers.common["Authorization"] = `Bearer `+results.data.access_token
                    localStorage.setItem('authToken', results.data.access_token)
                    this.$store.dispatch('checkLocalStorageCart')
                    this.overlay = false
                    if(this.$router.currentRoute.path != "/kosarica"){
                        window.location.href = migration[0].redirectURL
                    }
                    else{
                        window.location.href = migration[0].redirectURL+"kosarica"
                    }
                }
                this.overlay = false
            }) 
            .catch((error)=>{
              this.overlay = false
              this.response = error.response.data.error
            })
            



        }
    }

}
</script>
