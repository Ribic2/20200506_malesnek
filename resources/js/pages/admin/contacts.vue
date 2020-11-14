<template>
    <v-container>

        <v-app-bar>
            <v-toolbar-title>Kontakti</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle>
                    <v-btn
                    @click="contactOldest()"
                    >
                        <v-icon>mdi-filter-variant-minus</v-icon>
                    </v-btn>
                    <v-btn
                    @click="getContacts()"
                    >
                        <v-icon>mdi-filter-variant-plus</v-icon>
                    </v-btn>
                </v-btn-toggle>
        </v-app-bar>

        <v-divider></v-divider>
        <v-expansion-panels>
            <v-expansion-panel
            v-for="contact in this.$store.state.contact.contacts"
            :key="contact.id"
            >
            <v-expansion-panel-header>{{ contact.name }}<v-spacer></v-spacer> {{ contact.email }}</v-expansion-panel-header>
            <v-expansion-panel-content>
                {{ contact.message }}
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>

export default {
    methods:{
        getContacts(){
            return this.$store.dispatch('getContacts')
        },
        contactOldest(){
            return this.$store.dispatch('getOldestContacts')
        },
    },
    mounted(){
        this.getContacts()
    }
}
</script>
