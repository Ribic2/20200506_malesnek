<template>
    <v-container>

        <v-app-bar>
            <v-toolbar-title>Kontakti</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle>
                    <v-btn>
                        <v-icon>mdi-filter-variant-plus</v-icon>
                    </v-btn>
                    <v-btn>
                        <v-icon>mdi-filter-variant-minus</v-icon>
                    </v-btn>
                </v-btn-toggle>
        </v-app-bar>

        <v-divider></v-divider>
        <v-expansion-panels>
            <v-expansion-panel
            v-for="(item,i) in 5"
            :key="i"
            >
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>
