<template>
    <v-container>
        <v-dialog
        v-model="error"
        width="500"
        >
            <v-card>
                <v-card-title
                class="headline grey lighten-2"
                primary-title
                >
                Napaka
                </v-card-title>


                <v-card-text>
                Nekateri podatki manjkajo!
                </v-card-text>


                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="primary"
                    text
                    @click="error = false"
                    >
                    Ok
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <v-row>
            <v-col
            cols="12"
            xl="6"
            >
                <v-card
                height="390"
                >

                <v-card-title>
                Informacije u uporabniku
                </v-card-title>

                <v-card-text>

                    <p><span class="font-weight-black">Ime in priimek</span> {{ this.$store.state.user.Name }} {{ this.$store.state.user.Surname }}</p>
                    <p><span class="font-weight-black">E-naslov</span> {{ this.$store.state.user.Email }}</p>
                    <p><span class="font-weight-black">Telefonska št.</span> {{ this.$store.state.user.Phone }}</p>

                </v-card-text>

                </v-card>
            </v-col>

            <v-col
            cols="12"
            xl="6"
            >
                <v-card
                height="390"
                >
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Spremeni naslov dostave</v-expansion-panel-header>
                            <v-expansion-panel-content>

                                <v-text-field
                                label="Kraj"
                                v-model="region"
                                >
                                </v-text-field>

                                <v-text-field
                                v-model="houseNumberAndStreet"
                                label="Hišna številka in ulica"
                                >
                                </v-text-field>

                                <v-text-field
                                label="Poštna številka"
                                v-model="postcode"
                                maxLength="4"
                                >
                                </v-text-field>

                                <v-btn
                                width="100%"
                                rounded
                                color="#6C3FB8"
                                dark
                                @click="changeResidenceInfo()"
                                >Spremeni</v-btn>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header>Spremeni osnovne podatke</v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <v-text-field
                                label="Ime"
                                v-model="name"
                                >
                                </v-text-field>

                                <v-text-field
                                label="Priimek"
                                v-model="surname"
                                >
                                </v-text-field>

                                <v-text-field
                                label="Tel. šteilka"
                                v-model="phone"
                                maxLength="9"
                                >
                                </v-text-field>

                                <v-btn
                                width="100%"
                                rounded
                                color="#6C3FB8"
                                dark
                                @click="changeBasicInfo()"
                                >Spremeni</v-btn>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col
            cols="12"
            >
                <history></history>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import history from '../user/history.vue'
import { mapState } from 'vuex'
import store from '../../store/index'
import router from '../../routes/router'
import Axios from 'axios'
export default {
    components:{
        history
    },
    data(){
        return{
            changeRegion: '',
            changeHouseNumberAndStreet: '' ,
            changePostcode: '',
            changeName: '',
            changeSurname: '',
            changePhone: '',

            //error
            error: false
        }
    },
    computed:{
        name:{
            get(){
                this.changeName = this.$store.state.user.Name
                return this.$store.state.user.Name
            },
            set(value){
                this.changeName = value
            }
        },
        surname:{
            get(){
                this.changeSurname = this.$store.state.user.Surname
                return this.$store.state.user.Surname
            },
            set(value){
               this.changeSurname = value
            }
        },
        phone:{
            get(){
                this.changePhone = this.$store.state.user.Phone
                return this.$store.state.user.Phone
            },
            set(value){
                this.changePhone = value
            }
        },

        region:{
            get(){
                this.changeRegion = this.$store.state.user.Region
                return this.$store.state.user.Region
            },
            set(value){
                this.changeRegion = value
            }
        },
        postcode:{
            get(){
                this.postcode = this.$store.state.user.Postcode
                return this.$store.state.user.Postcode
            },
            set(value){
                this.changePostcode = value
            }
        },
        houseNumberAndStreet:{
            get(){
                this.changeHouseNumberAndStreet = this.$store.state.user.houseNumberAndStreet
                return this.$store.state.user.houseNumberAndStreet
            },
            set(value){
               this.changeHouseNumberAndStreet = value
            }
        }

    },
    methods:{
        //Changes basic info about user such as name, surname and phone number
        changeBasicInfo(){
            //All credentials that are going to get changed
            var credentials = {
                name: this.changeName,
                surname: this.changeSurname,
                phone: this.changePhone,
                userId: this.$store.state.user.userId
            }




            Axios.post('/api/user/change/basic', credentials)
            .then((results)=>{
                this.$store.dispatch('storeUserData')
            })
            .catch((error)=>{
                this.error = true;
            })
        },
        //Changes the user's residence information
        changeResidenceInfo(){
            //All credentials that are going to get changed
            var credentials = {
                postcode: this.changePostcode,
                houseNumberAndStreet: this.changeHouseNumberAndStreet,
                region: this.changeRegion,
                userId: this.$store.state.user.userId
            }

            Axios.post('/api/user/change/residence', credentials)
            .then((results)=>{
                return this.$store.dispatch('storeUserData')
            })
            .catch((error)=>{
                this.error = true;
            })
        },
    }
}
</script>

<style scoped>

</style>
