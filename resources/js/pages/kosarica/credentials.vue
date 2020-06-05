<template>
    <v-container>
        <!-- If user is not logged he is provided two options login or register -->
        <v-card v-if="!this.$store.state.user.LoginStatus">
            <v-card-actions>
                <v-btn
                @click="selectedOption = 1"
                >
                    Prijavi se
                </v-btn>

                <v-btn
                @click="selectedOption = 0"
                >
                    Podatki o dostavi
                </v-btn>
            </v-card-actions>
        </v-card>



        <!-- Checks if user is logged in and he is provided two options again register or login -->
        <v-card
        v-if="this.$store.state.user.LoginStatus == true"
        class="mt-1"
        min-height="600"
        >
            <v-card-actions>
                <register></register>
            </v-card-actions>
        </v-card>

        <v-card
        v-else
        class="mt-1"
        min-height="600"
        >
            <v-card-actions v-if="selectedOption == 1">
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
import store from '../../store/index'
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
