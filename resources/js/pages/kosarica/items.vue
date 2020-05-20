<template>
    <div>
        {{ this.$store.state.cart.cart }}
    </div>
</template>

<script>
import store from '../../store/index'
import Axios from 'axios'
export default {

    methods:{

        refreshCart(){
            return this.$store.dispatch('checkLocalStorageCart')
        }
    },
    mounted(){
        this.refreshCart()
    }
}
</script>
