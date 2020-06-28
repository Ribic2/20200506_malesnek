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
        v-if="!this.$store.state.user.LoginStatus"
      >
        <v-list-item
          v-for="link in userLinks" :key="link.label"
          :to='link.url'
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title :to='link.url'>{{ link.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!--If user is registerd-->
      <v-list
        dense
        nav
        v-else
      >
       <h5 class = "text-center">Dobrodošel {{ this.$store.state.user.Name}} {{ this.$store.state.user.Surname}}</h5>
        <v-list-item>
            <v-btn
            width="100%"
            rounded
            color="#6C3FB8"
            dark
            @click="logout()"
            >
            <v-icon>mdi-logout</v-icon>
            Odjava</v-btn>
         </v-list-item>
        <v-list-item>
            <v-btn
            rounded
            color="#6C3FB8"
            dark
            width="100%"
            to="/reset-password"
            >Spremeni geslo</v-btn>
        </v-list-item>

        <v-list-item>
            <v-btn
            rounded
            dark
            width="100%"
            to="/user/order/history"
            color="#6C3FB8"
            >Ogled prejšnih naročil</v-btn>
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
      src = "http://vidbukovec.si/storage/store/FullColor_1280x1024_300dpi.jpg"
      width="2"
      height="48"
      id="logo"
      ></v-img>
    </v-app-bar-nav-icon>
    <v-toolbar-title>Uniq Cards</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
    class="mr-1"
    icon
    @click.stop="drawer = !drawer"
    >
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>

    <v-btn
    to="/kosarica"
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



    <v-content>
        <slot />
    </v-content>

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
            {{ new Date().getFullYear() }}  <strong>Uniq Cards</strong>
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
        :showPostponeButton="false"
        @clicked-accept="cookieClickedAccept"
        @clicked-decline="cookieClickedDecline">

        <!-- Optional -->
        <div slot="postponeContent">
            &times;
        </div>

        <!-- Optional -->
        <div slot="message">
            We use cookies to ensure you get the best experience on our website. <a href="https://cookiesandyou.com/" target="_blank">Learn More...</a>
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

import store from '../store/index'
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css'
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'

export default {
    components:{
        VueCookieAcceptDecline
    },
    props: ['routeName'],
    data(){
        return{
            route: this.routeName,
            cookieStatus: '',
            links:[
                {label: 'TRGOVINA', url: '/', route: "index"},
                {label: 'KONTAKT', url: '/kontakt'},
                {label: 'PRILJUBLJENO', url:'/priljubljeno'}
            ],
            userLinks:[
                {label: 'Prijava', icon: 'mdi-login', url: '/user/login', route: 'login'},
                {label: 'Registracija', icon:'mdi-account-edit', url: '/user/register'}
            ],
            drawer: false,
            token: $('meta[name="csrf-token"]').attr('content')
        }
    },
    methods:{
        logout(){
            Promise.all([
                this.$store.dispatch('logoutUser'),
                this.$store.dispatch('deleteCart')
            ])

        },
        authUser(){
            return this.$store.dispatch('storeUserData')
        },

        refreshCart(){
            return this.$store.dispatch('checkLocalStorageCart')
        },
        cookieClickedAccept(){
            this.cookieStatus = 'accept'
        },
        cookieClickedDecline(){
            this.cookieStatus = 'decline'
        }
    },
    computed:{

    },
    mounted(){
        this.authUser(),
        this.refreshCart()
    }
}
</script>

<style scoped>
  #logo{
    border-radius: 500px;
  }
</style>
