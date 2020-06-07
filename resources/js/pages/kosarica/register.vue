<template>
    <v-container>
        <v-card
        elevation="0"
        width="500"
        >
            <v-form>
                <!--If user is logged in -->
                <v-row v-if="this.$store.state.user.LoginStatus">
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
                        :vmodel="this.$store.state.user.Surname ? '' : surname"
                        :disabled="this.$store.state.user.Surname ? true : false"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>

                <!--If user is not logged in-->
                <v-row v-else>
                    <v-col>
                        <v-text-field
                        label="Ime"
                        v-model="name"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                        label="Priimek"
                        v-model="surname"
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
                        :value="this.$store.state.user.Phone ? this.$store.state.user.Phone : ''"
                        :model="this.$store.state.user.Phone ? '' : telephonNumber"
                        :disabled="this.$store.state.user.Phone ? true : false"
                        >


                        </v-text-field>
                    </v-col>

                     <v-col>
                        <v-text-field
                        label="Regija"
                        v-model="region"
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

                <div v-if="error.length != 0">
                    {{ error }}
                </div>
                <v-card-actions>
                    <v-btn
                    @click="register"
                    color="primary"
                    >Registriraj se</v-btn>
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
            postcode: '',
            region: '',
            error: ''
        }
    },
    methods:{
        register(){
            var credentials = {
                name: this.$store.state.user.Name ? this.$store.state.user.Name : this.name,
                surname: this.$store.state.user.Surname ? this.$store.state.user.Surname : this.surname,
                password: this.$store.state.user.LoginStatus ? '' : this.password,
                email: this.$store.state.user.Email ? this.$store.state.user.Email : this.email,
                region: this.region,
                phone: this.$store.state.user.Phone ? this.$store.state.user.Phone : this.telephonNumber,
                houseNumberAndStreet: this.houseNumberAndStreet,
                postcode: this.postcode,
                isAlreadyRegisterd: this.$store.state.user.LoginStatus ? 1 : 0

            }
            if(this.password.length < 7 && !this.$store.state.user.LoginStatus){
                this.error = "Geslo je prekratko!"
                return false;
            }

             Axios.post('/api/user/register/cart', credentials)
            .then((results)=>{

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
