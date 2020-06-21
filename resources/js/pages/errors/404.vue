<template>
    <v-container>
         <v-row>
            <v-card
            id = "notFound"
            elevation="0"
            >
                <div id = "iconHolder">
                    <v-icon
                    size="100"
                    id="Icon"
                    >
                    mdi mdi-emoticon-sad-outline</v-icon>
                </div>
                <h3 class="text-center">Stran, ki ste jo hoteli obiskati ne obstaja.</h3>
            </v-card>
        </v-row>

    </v-container>
</template>

<style scoped>
    #notFound{
        width: 100%;
        height: 100% !important;
        position: relative;
        top: 250px;
    }
    #Icon{
        position: relative;
        vertical-align: middle;
        height: 100%;
        width: 100%;
    }
    #iconHolder{
        width: 5%;
        margin: 0 auto;
    }
</style>
