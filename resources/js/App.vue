<template>
    <div>
        <component :is="layout">
            <router-view>

            </router-view>
        </component>
    </div>
</template>

<script>
import Axios from 'axios'

const default_layout = "default"

export default {
    methods:{


    },
    computed:{
        layout(){
            return (this.$route.meta.layout || default_layout) + '-layout';
        }
    },
    mounted(){

    }
}
</script>
