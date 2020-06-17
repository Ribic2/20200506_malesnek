<template>
    <v-container>
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="card card-default">
                    <div class="card-header">Reset Password</div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="email">E-mail</label>
                                <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
                            </div>
                            <button class="btn btn-primary" @click="requestResetPassword">Send Password Reset Link</button>

                        </div>
                    </div>
             </div>
        </div>
    </v-container>
</template>

<script>
import Axios from 'axios';
export default {
    data() {
      return {
        email: null,
        has_error: false
      }
    },
    methods: {
        requestResetPassword() {
            Axios.post("/api/reset-password", {email: this.email}).then(result => {
                this.response = result.data;
                console.log(result.data);
            }, error => {
                console.error(error);
            });
        }
    }
}
</script>

<style scoped>

</style>
