import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VuetifyFonts from '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)
Vue.use(VuetifyFonts)

const opts = {
    icons:{
        iconfont: 'mdi'
    }
}

export default new Vuetify(opts)
