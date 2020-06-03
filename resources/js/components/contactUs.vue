<template>
    <v-card
    elevation="0"
    >
        <v-card-title
        class="display-1"
        >Kontaktirajte nas</v-card-title>
        <v-form>
            <v-text-field
            label="Vaše ime"
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
    </v-card>
</template>

<script>
import store from '../store/index'
export default {
    data(){
        return{
            name: '',
            email: '',
            message: ''
        }
    },
    methods:{
        addContact(){
            return this.$store.dispatch('addContact', {name: this.name, email: this.email, message: this.message})
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
