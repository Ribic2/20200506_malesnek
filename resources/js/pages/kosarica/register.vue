<template>
    <v-container>
        <v-card
        width="500"
        >
            <v-form>
                <v-row>
                    <v-col>
                        <v-text-field
                        label="Ime"
                        :value="this.$store.state.user.Name ? this.$store.state.user.Name : ''"
                        :model="this.$store.state.user.Name ? '' : name"
                        :disabled="this.$store.state.user.Name ? true : false"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                        label="Priimek"
                        :value="this.$store.state.user.Surname ? this.$store.state.user.Surname : ''"
                        :model="this.$store.state.user.Surname ? '' : surname"
                        :disabled="this.$store.state.user.Surname ? true : false"
                        >

                        </v-text-field>
                    </v-col>
                </v-row>


                <v-row>
                    <v-col>
                        <v-text-field
                        label="email"
                        :value="this.$store.state.user.Email ? this.$store.state.user.Email : ''"
                        :model="this.$store.state.user.Email ? '' : email"
                        :disabled="this.$store.state.user.Surname ? true : false"
                        >

                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                        label="Geslo"
                        v-if="this.$store.state.user.LoginStatus == false"
                        v-model="password"
                        >

                        </v-text-field>
                    </v-col>
                </v-row>


                <v-row>
                    <v-col>
                        <v-text-field
                        label="Tel. šteilka"
                        v-model="telephonNumber"
                        >


                        </v-text-field>
                    </v-col>
                </v-row>


                <v-row>
                    <v-col>
                        <v-text-field
                        label="Hišna številka in ulica"
                        v-model="houseNumberAndStreet"
                        >

                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                        label="Poštna številka"
                        v-model="postcode"
                        >

                        </v-text-field>
                    </v-col>
                </v-row>

                <v-card-actions>
                    <v-btn @click="register">Registriraj se</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import Axios from 'axios'
import store from '../../store/index'
export default {
    data(){
        return{
            name: '',
            surname: '',
            email: '',
            password: '',
            telephonNumber: '',
            houseNumberAndStreet: '',
            postcode: ''
        }
    },
    methods:{
        register(){
            var credentials = {
                name: this.name,
                surname: this.surname,

                password: this.password,
                email: this.email,

                phone: this.telephonNumber,

                houseNumberAndStreet: this.houseNumberAndStreet,
                postcode: this.postcode

            }

            Axios.post('/api/user/register/cart', credentials)
            .then((results)=>{
                console.log(results)
                if(results.data.authentication){
                    axios.defaults.headers.common["Authorization"] = `Bearer `+results.data.access_token
                    localStorage.setItem('authToken', results.data.access_token)
                    this.$store.dispatch('checkLocalStorageCart')

                    if(this.$router.currentRoute.path != "/kosarica"){
                        window.location.href = "http://127.0.0.1:8000/"
                    }
                    else{
                        window.location.href = "http://127.0.0.1:8000/kosarica"
                    }

                }
            })
        }
    }
}
</script>
