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
       <h5 class = "text-center">Dobrodošel uporabnik {{ this.$store.state.user.Name}} {{ this.$store.state.user.Surname}}</h5>
        <v-list-item>
            <v-btn
            width="100%"
            rounded
            @click="logout()"
            >
            <v-icon>mdi-logout</v-icon>
            Odjava</v-btn>
         </v-list-item>
        <v-list-item>
            <v-btn
            rounded
            width="100%"
            >Spremeni geslo</v-btn>
        </v-list-item>

        <v-list-item>
            <v-btn
            rounded
            width="100%"
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
      <!--<v-img
      src = "/logo.jpg"
      width="2"
      height="48"
      id="logo"
      ></v-img>-->
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


  </v-app>
</template>

<script>

import store from '../store/index'

export default {
    props: ['routeName'],
    data(){
        return{
            route: this.routeName,
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
