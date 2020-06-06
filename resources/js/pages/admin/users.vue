<template>
    <v-container>
        <v-row>
            <v-col
            cols="12"
            lg="4"
            md="6"
            v-for="user in users" :key="user.user_id">
                <v-card
                v-if="$store.state.user.Name != user.Name"
                height="500"
                >
                <h1 class="headline text-center pt-4">{{ user.user_id }}. {{ user.Name }} {{ user.Surname }}</h1>
                <v-divider></v-divider>

                <v-card-text>
                    <p><span class="font-weight-bold">E-naslov:  </span>{{ user.email }}</p>
                    <p><span class="font-weight-bold">Telefon: </span>{{ user.Telephone }}</p>
                    <p><span class="font-weight-bold">Hišna številka: </span>{{ user.houseNumberAndStreet }} {{ user.Postcode }}</p>

                    <p v-if="user.isEmployee">
                        Uporabnik je administrator.
                    </p>

                    <p v-if="user.isAuth">
                        Uporabnik je potrdil svoj e-naslov.
                    </p>

                    <p v-if="user.isNewCustomer">
                    Je nov uporabnik.
                    </p>
                    <v-divider></v-divider>

                </v-card-text>
                    <div id="buttonHolder">
                        <v-row>
                            <v-col
                            cols="12"
                            >
                                <v-btn
                                width="100%"
                                @click="deleteUser(user.user_id)"
                                >Izbriši uporabnika</v-btn>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col
                            cols="12">
                                <v-btn
                                width="100%"
                                v-if="user.isEmployee == false"
                                @click="changeUserAdminStatus(user.user_id)"
                                >Dodeli administrator</v-btn>

                                <v-btn
                                width="100%"
                                v-else-if="user.isEmployee == true"
                                @click="changeUserAdminStatus(user.user_id)"
                                >Odstrani administratorja</v-btn>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Axios from 'axios'
import store from '../../store/index'

export default {
    data(){
        return{
            users: ''
        }
    },
    methods:{
        getAllUsers(){
            Axios.get('/api/users/all')
            .then((results)=>{
                this.users = results.data
            })
        },
        //Deletes user
        deleteUser(e){
            Axios.post('/api/user/delete/', {id: e})
            .then((results)=>{
                this.getAllUsers()
            })
        },
        //Changes admin status of user
        changeUserAdminStatus(e){
            Axios.post('/api/user/change/admin', {id: e})
            .then((results)=>{
                this.getAllUsers()
            })

        }
    },
    mounted(){
        this.getAllUsers()
    }
}
</script>

<style scoped>
    #buttonHolder{
        position: absolute;
        bottom: 0px;
        width: 90%;
        left: 5%;
    }
</style>
