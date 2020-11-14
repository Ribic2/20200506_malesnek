<template>
    <v-app>
        <!--side bar-->
        <v-navigation-drawer
            v-model="drawer"
            width="300"
            app
            temporary
            disable-resize-watcher
            disable-route-watcher
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Uporabnik
                    </v-list-item-title>
                    <v-divider></v-divider>
                </v-list-item-content>
            </v-list-item>

            <v-list
                dense
                nav
                v-if="this.$store.state.user.user == null"
            >
                <v-list-item
                    v-for="link in userLinks" :key="link.label"
                >
                    <v-btn
                        width="100%"
                        :elevation="0"
                        rounded
                        color="#6C3FB8"
                        dark
                        :ripple="false"
                        :to='link.url'>
                        <v-icon>{{ link.icon }}</v-icon>
                        {{ link.label }}
                    </v-btn>
                </v-list-item>
            </v-list>
            <!--If user is registerd-->
            <v-list
                dense
                nav
                v-else
            >
                <h5 class="text-center">Dobrodošli {{ this.$store.state.user.user.Name }}
                    {{ this.$store.state.user.user.Surname }}</h5>
                <v-list-item>
                    <v-btn
                        width="100%"
                        rounded
                        color="#6C3FB8"
                        dark
                        :ripple="false"
                        :elevation="0"
                        @click="logout()"
                    >
                        <v-icon>mdi-logout</v-icon>
                        Odjava
                    </v-btn>


                </v-list-item>
                <v-list-item>
                    <v-btn
                        rounded
                        color="#6C3FB8"
                        dark
                        width="100%"
                        to="/reset-password"
                    >Spremeni geslo
                    </v-btn>
                </v-list-item>

                <v-list-item>
                    <v-btn
                        rounded
                        dark
                        width="100%"
                        to="/user/profile"
                        color="#6C3FB8"
                    >Ogled profila
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- web app -->
        <v-app-bar
            app
            color="#6C3FB8"
            dark
        >
            <v-app-bar-nav-icon>
                <v-img
                    @click="this.$router.push('/')"
                    src="/storage/store/FullColor_1280x1024_300dpi.jpg"
                    width="2"
                    height="48"
                    id="logo"
                ></v-img>
            </v-app-bar-nav-icon>
            <v-toolbar-title>
                <v-btn
                    depressed
                    @click="this.$router.push('/')"
                    color="#6C3FB8"
                    width="95"
                    :ripple="false"
                >Uniq Cards
                </v-btn>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
                class="mr-1"
                icon
                @click.stop="drawer = !drawer"
            >
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>

            <v-btn
                to="/cart"
                class="mr-1"
                icon>
                <v-badge
                    :content="this.$store.state.cart.cart == null ? '' : this.$store.state.cart.cart.length"
                    :value="this.$store.state.cart.cart == null ? '' : this.$store.state.cart.cart.length"
                    overlap
                >
                    <v-icon>mdi-cart</v-icon>
                </v-badge>
            </v-btn>
            <template v-slot:extension>
                <v-tabs align-with-title>
                    <v-tab v-for="link in links" v-bind:key="link.label" :to="link.url">{{ link.label }}</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>


        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer
            color="#6C3FB8"
            padless
        >
            <v-row
                justify="center"
                color="#6C3FB8"
                no-gutters
            >
                <v-btn
                    v-for="link in links"
                    :key="link.label"
                    color="white"
                    text
                    rounded
                    class="my-2"
                    :to="link.url"
                >
                    {{ link.label }}
                </v-btn>

                <v-col
                    color="#6C3FB8"
                    class="lighten-2 py-4 text-center white--text"
                    cols="12"
                >
                    {{ new Date().getFullYear() }} <strong>Uniq Cards</strong>
                </v-col>
            </v-row>
        </v-footer>

        <VueCookieAcceptDecline
            :ref="'myPanel1'"
            :elementId="'myPanel1'"
            :debug="false"
            :position="'bottom-left'"
            :type="'floating'"
            :disableDecline="false"
            :transitionName="'slideFromBottom'"
            :showPostponeButton="false">


            <!-- Optional -->
            <div slot="postponeContent">
                &times;
            </div>

            <!-- Optional -->
            <div slot="message">
                We use cookies to ensure you get the best experience on our website. <a
                href="https://cookiesandyou.com/" target="_blank">Learn More...</a>
            </div>

            <!-- Optional -->
            <div slot="declineContent">
                OPT OUT
            </div>

            <!-- Optional -->
            <div slot="acceptContent">
                GOT IT!
            </div>
        </VueCookieAcceptDecline>
    </v-app>
</template>

<script>

import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css'
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'

export default {
    components: {
        VueCookieAcceptDecline
    },
    data() {
        return {
            cookieStatus: '',
            links: [
                {label: 'TRGOVINA', url: '/', route: "index"},
                {label: 'KONTAKT', url: '/contact'},
                {label: 'PRILJUBLJENO', url: '/favourites'}
            ],
            userLinks: [
                {label: 'Prijava', icon: 'mdi-login', url: '/login'},
                {label: 'Registracija', icon: 'mdi-account-edit', url: '/register'}
            ],
            drawer: false,
        }
    },
    methods: {
        authUser() {
            return this.$store.dispatch('getUser')
        },
        logout() {
            return this.$store.dispatch('logout')
        },
        /*
        refreshCart() {
            return this.$store.dispatch('checkLocalStorageCart')
        },
        cookieClickedAccept() {
            this.cookieStatus = 'accept'
        },
        cookieClickedDecline() {
            this.cookieStatus = 'decline'
        },
        getFavourites() {
            if (localStorage.getItem('authToken')) {
                return this.$store.dispatch('resetFavouritesRegisterdUser')
            }
        },
        getUserHistory() {
            return this.$store.dispatch('getUserOrderHistory')
        },*/
    },
    mounted() {
        this.authUser()
        //this.refreshCart(),
        //this.getUserHistory(),
        //this.getFavourites()
    }
}
</script>

<style scoped>
#logo {
    border-radius: 500px;
}
</style>
