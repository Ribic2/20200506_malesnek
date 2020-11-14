<template>
    <v-card
    elevation="0"
    >
        <v-card-title
        class="display-1 pl-0"
        >Kontaktirajte nas</v-card-title>
        <v-form>
            <v-text-field
            label="Ime in priimek"
            outlined
            v-model="name"
            >

            </v-text-field>

            <v-text-field
            label="E-naslov"
            v-model="email"
            type="email"
            outlined
            >

            </v-text-field>

            <v-textarea
            no-resize
            outlined
            v-model="message"
            height="200"
            label="Sporočilo..."
            ></v-textarea>
            <v-btn
            rounded
            width="300"
            height="50"
            id="submitButton"
            color="#5635A5"
            dark
            @click="addContact()"
            >Pošlji</v-btn>
        </v-form>

        <v-card-actions>
            <v-alert
            v-if="error"
            width="100%"
            type="warning"
            >
            {{ error }}
            </v-alert>

            <v-alert
            width="100%"
            v-else-if="response"
            type="success"
            >
            {{ response }}
            </v-alert>
        </v-card-actions>
    </v-card>
</template>

<script>
import api from '../../services/api'
import store from '../../store'
export default {
    data(){
        return{
            name: '',
            email: '',
            message: '',
            response: '',
            error: ''
        }
    },
    methods:{
        addContact(){
            api.sendContact({name: this.name, email: this.email, message: this.message})
            .then((results)=>{
                console.log(results)
            })
        }
    }
}
</script>

<style scoped>
    @media only screen and (max-width: 575px){
        #submitButton{
            width: 100% !important;
        }
    }
</style>
