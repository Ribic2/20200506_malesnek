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
                        :model="this.$store.state.user.Surname ? '' : surname"
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
                    <!-- If user is registerd -->
                    <v-col v-if="this.$store.state.user.Email">
                        <v-text-field
                        label="email"
                        :value="this.$store.state.user.Email"
                        disabled
                        >
                        </v-text-field>
                    </v-col>


                    <!-- If user is not registerd nor is guest -->
                    <v-col v-else>
                        <v-text-field
                        label="email"
                        v-model="email"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>


                <v-row>
                    <v-col>
                        <v-text-field
                        v-if="this.$store.state.user.Phone"
                        :value="this.$store.state.user.Phone"
                        :model="this.$store.state.user.Phone"
                        disabled
                        >
                        </v-text-field>
                        <v-text-field
                        label="Tel. šteilka"
                        v-model="telephonNumber"
                        v-else
                        >

                        </v-text-field>
                    </v-col>

                    <v-col>
                        <v-text-field
                        label="Kraj"
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
import migration from '../../../../migration.json'
import store from '../../store/index'
export default {
    data(){
        return{
            migraiton: migration,
            name: '',
            surname: '',
            email: '',
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
                email: this.$store.state.user.Email ? this.$store.state.user.Email : this.email,
                region: this.region,
                phone: this.$store.state.user.Phone ? this.$store.state.user.Phone : this.telephonNumber,
                houseNumberAndStreet: this.houseNumberAndStreet,
                postcode: this.postcode,
                isAlreadyRegisterd: this.$store.state.user.LoginStatus ? 1 : 0

            }


            Axios.post('api/user/register/cart', credentials)
            .then((results)=>{
                //Checks if user registerd as guest
                if(results.data.guest){
                    localStorage.setItem('guest', JSON.stringify(results.data.user))
                }
                if(results.data.response == "Ok"){

                    this.$store.dispatch('checkLocalStorageCart')

                    if(this.$router.currentRoute.path != "/kosarica"){
                        window.location.href = migration[0].redirectURL
                    }
                    else{
                        window.location.href = migration[0].redirectURL+"kosarica"
                    }

                }
            })
        },
        /**
        * Checks if
        */
        checkIfGuest(){
            if(localStorage.getItem('guest')){
                let data = JSON.parse(localStorage.getItem('guest'))

                this.name = data.Name
                this.surname = data.Surname
                this.email = data.Email
                this.telephonNumber = data.Phone
                this.postcode = data.PostCode
                this.region = data.Region
                this.houseNumberAndStreet = data.houseNumberAndStreet

            }
        }
    },
    mounted(){
        this.checkIfGuest()
    }
}
</script>
