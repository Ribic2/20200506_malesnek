<template>
    <v-card
    elevation="0"
    >
        <v-card-title
        class="display-1"
        >Kontaktirajte nas</v-card-title>
        <v-form>
            <v-text-field
            label="Vaše ime"
            outlined
            >

            </v-text-field>

            <v-text-field
            label="E-naslov"
            outlined
            >

            </v-text-field>

            <v-textarea
            no-resize
            outlined
            height="200"
            label="Sporočilo..."
            ></v-textarea>
            <v-btn
            rounded
            width="300"
            height="50"
            color="#5635A5"
            dark
            >Pošlji</v-btn>
        </v-form>
    </v-card>
</template>
