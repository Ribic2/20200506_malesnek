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
            >Prijavi se</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      showPassword: false,
      email: '',
      password: ''
    }
  },
  methods:{
    login(){
        axios.post('http://127.0.0.1:8000/user/login', {email: this.email, password: this.password})
        .then((results)=>{
            if(results){
                console.log(results)
            }
            else{
                console.log(results)
            }

        })
    }
  },
  computed:{

  }
}
</script>
<style scoped>

</style>

