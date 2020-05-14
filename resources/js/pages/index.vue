<template>
    <v-container>
        <v-row>
            <v-col
            v-for="product in data"
            :key="product.itemName"
            cols="12"
            xl="3"
            >
                <v-card>
                    <v-responsive :aspect-ratio="4/5">
                        <v-card-title>{{ product }}</v-card-title>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            data: ''
        }
    },
    methods:{
        getData(){
            axios.get('http://127.0.0.1:8000/api/items/1')
            .then((results)=>{
                console.log(results)
                this.data = results.data.data;
            })
        },
        test(){
            console.log(localStorage.getItem('authToken'))
            axios.get('/oauth/clients')
            .then(response => {
                console.log(response.data);
            });
        }

    },
    mounted(){
        this.getData(),
        this.test()

    }
}
</script>

<style scoped>

</style>

