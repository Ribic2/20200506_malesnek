require('./bootstrap');
import Vue from 'vue'
import App from './App.vue';
import router from './routes/router.js'
import Vuetify from '../plugins/vuetify.js'

import store from '../js/store/index.js'
import Default from './layouts/default.vue'


Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);

Vue.component('default-layout', Default)

const app = new Vue({
    el: '#app',
    router: router,
    vuetify: Vuetify,
    store,
    render: h => h(App)
});
