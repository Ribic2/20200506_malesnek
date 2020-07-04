<template>
    <v-card
    id = "card"
    elevation="0"
    >
        <div id = "Holder">
            <v-icon
            size="100"
            id="Icon"
            >
            {{ icon }}</v-icon>
        </div>

        <h3 class="text-center">{{ text }}</h3>
    </v-card>
</template>

<script>
export default {
    props:[
        'icon', 'text'
    ]
}
</script>

<style>
    #card{
        width: 100%;
        margin: auto;
        position: absolute;
        top: 28%; 
        left: 0;
        bottom: 0; 
        right: 0;
    }
    #Icon{
        position: relative;
        vertical-align: middle;
        height: 100%;
        width: 100%;
    }
    #Holder{
        width: 5%;
        margin: 0 auto;
    }
</style>