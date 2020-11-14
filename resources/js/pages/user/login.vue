<template>
    <v-container>
        <v-card
            class="mx-auto mt-12"
            width="500"
            height="500"
            :elevation="$vuetify.breakpoint.smAndDown ? 0 : 5"
        >
            <v-card-title>
                Prijava
            </v-card-title>

            <v-card-text>
                <v-form>
                    <v-text-field
                        label="E-naslov"
                        v-model="email"
                        prepend-icon="mdi-email"
                    ></v-text-field>

                    <v-text-field
                        label="Geslo"
                        v-model="password"
                        :type="showPassword ? 'text' : 'password'"
                        :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        prepend-icon="mdi-lock"
                    ></v-text-field>

                    <v-card-actions>
                        <v-btn
                            width="100%"
                            rounded
                            color="#6C3FB8"
                            dark
                            @click="login"
                        >Prijavi se
                        </v-btn>
                    </v-card-actions>
                </v-form>


                <v-alert type="error" v-if="response">
                    <ul v-if="response.errors">
                        <li>
                            {{ response.message }}
                        </li>
                        <li>
                            {{ response.errors.email[0] }}
                        </li>
                    </ul>

                    <p v-else>
                        {{ response.message }}
                    </p>
                </v-alert>

            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import router from "../../routes/router";
import api from "../../services/api";

export default {
    data() {
        return {
            showPassword: false,
            email: '',
            password: '',
            response: null
        }
    },
    methods: {
        login() {
            api.login(this.email, this.password)
            .then((response)=>{
                localStorage.setItem('authToken', response.data.access_token)
                router.push('/')
            })
            .catch((err)=>{
                this.response = err.response.data
            })

        },
    },
}
</script>


