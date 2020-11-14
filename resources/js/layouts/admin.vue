<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>Urejevalnik</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle
                class="float-right"
                borderless
                group
            >
                <v-btn
                    icon
                    v-for="button in buttons" :key="button.id"
                    :to="button.link"
                >
                    <v-icon>{{ button.icon }}</v-icon>
                </v-btn>
            </v-btn-toggle>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app>

        </v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            buttons: [
                {id: 1, icon: 'mdi-card-bulleted-outline', link: '/admin'},
                {id: 2, icon: 'mdi-order-numeric-ascending', link: '/admin/orders'},
                {id: 3, icon: 'mdi-account', link: '/admin/users'},
                {id: 4, icon: 'mdi-contacts', link: '/admin/contacts'}
            ]
        }
    }
}
</script>

