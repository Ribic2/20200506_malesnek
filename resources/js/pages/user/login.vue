<template>
  <v-container>
    <v-card
    class="mx-auto mt-12"
    width="500"
    height="500"
    >
      <v-card-title>
        Prijava
      </v-card-title>

      <v-card-text>
        <v-form
        id="login_form"
        method="POST"
        action="/user/login"
        >

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
          <v-card-actions>
            <v-btn
            width="100%"
            type="button"
            @click="login"
            color="primary"
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
import migration from '../../../../migration.json'
import route from '../../routes/router'
export default {
  data(){
    return{
      showPassword: false,
      email: '',
      password: '',
      response: ''
    }
  },
  methods:{
    login(){
        axios.post('/api/user/login', {email: this.email, password: this.password},)
        .then((results)=>{
            if(!results.data.authentication){
                this.response = "Napačno geslo ali uporabniško ime!"
            }
            else if(results.data.authentication){
                axios.defaults.headers.common["Authorization"] = `Bearer `+results.data.access_token
                localStorage.setItem('authToken', results.data.access_token)
                this.$store.dispatch('checkLocalStorageCart')

                if(this.$router.currentRoute.path != "/kosarica"){
                    window.location.href = migration[0].redirectURL
                }
                else{
                    window.location.href = migration[0].redirectURL+"kosarica"
                }

            }
        })
        .catch(error =>{
            if (error.response) {
                this.response = error.response.data.errors.email[0]
            }
        })
    },
    checkIfLoggedIn(){
        if(localStorage.getItem('authToken')){
            window.location.href = migration[0].redirectURL
        }
    }
  },
  computed:{

  },
  mounted(){

  }
}
</script>
<style scoped>

</style>

