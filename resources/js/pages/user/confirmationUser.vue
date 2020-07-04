<template>
    <v-container>
        <empty
        :text="displayText"
        :icon="icon"
        ></empty>

    </v-container>
</template>

<script>
import empty from '../../components/empty.vue'

import router from '../../routes/router'
import Axios from 'axios'
export default {
    components:{
        empty
    },
    data(){
        return{
            displayText: '',
            icon: ''
        }
    },
    methods:{
        getEmailData(){
            let email = this.$route.query.email;
            Axios.post('/api/confirmation', {email: email})
            .then((results)=>{
                if(results.data == 1){
                    this.displayText = "Uporabik uspešno potrjen!"
                    this.icon="mdi-emoticon-happy-outline"
                }
                else{
                    this.displayText = "Uporabnik ne obstaja ali je pa že potrjen"
                    this.icon = "mdi-emoticon-sad-outline"
                }
            })
        }
    },
    mounted(){
        this.getEmailData()
    }
}
</script>
