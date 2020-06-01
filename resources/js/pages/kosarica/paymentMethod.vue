<template>
    <v-container>
        <div v-if="this.$store.state.user.isAuth == true">
            <h1>User compfirmed his/her mail</h1>
        </div>
        <div v-else>
            <h1>You need to comfirm your mail first</h1>
        </div>
    </v-container>
</template>

<script>

import store from '../../store/index'
export default {

}
</script>
