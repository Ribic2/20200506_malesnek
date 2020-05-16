<template>
  <v-app>
    <!--side bar-->
    <v-navigation-drawer
    v-model="drawer"
    width="300"
    app
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
      >
        <v-list-item
          v-for="link in userLinks" :key="link.label"
          link
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
        content="5"
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
    }
}
</script>

<style scoped>
  #logo{
    border-radius: 500px;
  }
</style>
