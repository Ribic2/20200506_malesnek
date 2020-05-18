<template>
    <div>
        {{ this.$store.state.cart.cart }}
    </div>
</template>

<script>
import store from '../../store/index'
export default {

  methods:{
    getLocalStorageData(){
        this.$store.dispatch('checkLocalStorageCart')
    }
  },
  mounted(){
    this.getLocalStorageData()
  }
}
</script>
