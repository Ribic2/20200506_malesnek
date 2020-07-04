<template>
    <v-container>
        <v-row>
            <v-col
            cols="12"
            xl="6"
            >
                <v-card
                height="300"
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
                height="500"
                >test</v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import store from '../../store/index'
import router from '../../routes/router'
export default {
 
    
}
</script>

<style scoped>

</style>