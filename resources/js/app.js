require('./bootstrap');
import Vue from 'vue'
import App from './App.vue';
import router from './routes/router.js'
import Vuetify from '../plugins/vuetify.js'

import Default from './layouts/default.vue'

Vue.component('default-layout', Default)

const app = new Vue({
    el: '#app',
    router: router,
    vuetify: Vuetify,
    render: h => h(App)
});
