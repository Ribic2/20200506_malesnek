<template>
    <v-container>
        <v-card>
            <v-card-actions>
                <v-btn
                @click="selectedOption = 'Prijava'"
                >
                    Prijavi se
                </v-btn>

                <v-btn
                @click="selectedOption = 'Podatki o dostavi'"
                >
                    Podatki o dostavi
                </v-btn>
            </v-card-actions>

        </v-card>

        <v-card
        class="mt-1"
        min-height="600"
        >
            <v-card-actions v-if="selectedOption == 'Prijava'">
                <login></login>
            </v-card-actions>

            <v-card-actions v-else>
                <register></register>
            </v-card-actions>
        </v-card>
    </v-container>
</template>


<script>
import register from '../kosarica/register'
import login from '../user/login'
export default {
    components:{
        login,
        register
    },
    data(){
        return{
            selectedOption: ''
        }
    }
}
</script>
