<template>
    <v-app>


        <v-app-bar app>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Urejevalnik</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn-toggle
            class="float-right"
            borderless
            group
            >
                    <v-btn
                    to="/admin/orders"
                    >
                        <v-icon>mdi-order-numeric-ascending</v-icon>
                    </v-btn>
                    <v-btn
                    to="/admin/users"
                    >
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                    <v-btn
                    to="/admin/items"
                    >
                        <v-icon>mdi-card-bulleted-outline</v-icon>
                    </v-btn>
                    <v-btn
                    to="/admin/contacts"
                    >
                        <v-icon>mdi-contacts</v-icon>
                    </v-btn>
            </v-btn-toggle>
        </v-app-bar>

        <v-content>


            <v-container fluid>
                <slot />
            </v-container>
        </v-content>

        <v-footer app>

        </v-footer>
    </v-app>
</template>

