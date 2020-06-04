<template>
    <h1>{{  displayText }}</h1>
</template>

<script>
import router from '../../routes/router'
import Axios from 'axios'
export default {

    data(){
        return{
            displayText: ''
        }
    },
    methods:{
        getEmailData(){
            let email = this.$route.query.email;
            Axios.post('/api/confirmation', {email: email})
            .then((results)=>{
                console.log(results.data)
                if(results.data == 1){
                    this.displayText = "Uporabik uspešno potrjen!"
                }
                else{
                    this.displayText = "Uporabnik ne obstaja ali je pa že potrjen"
                }
            })
        }
    },
    mounted(){
        this.getEmailData()
    }
}
</script>
