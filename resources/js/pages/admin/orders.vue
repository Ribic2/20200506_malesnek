<template>
    <v-container>

         <v-app-bar>
            <v-toolbar-title>Naročila</v-toolbar-title>
            <v-spacer></v-spacer>
                <v-btn-toggle>
                    <v-btn>
                        <v-icon>mdi-filter-variant-plus</v-icon>
                    </v-btn>
                    <v-btn>
                        <v-icon>mdi-filter-variant-minus</v-icon>
                    </v-btn>
                     <v-btn>
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                     <v-btn>
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                     <v-btn>
                        <v-icon>mdi-all-inclusive</v-icon>
                    </v-btn>
                </v-btn-toggle>
        </v-app-bar>

        <v-row>
            <v-col
            cols="12"
            xs="12"
            xl="4"
            lg="4"
            md="6"
            sm="12"
            >
                <v-card>
                    <v-responsive :aspect-ratio="4/3">
                        <v-card-text>
                            Narocilo
                        </v-card-text>
                    </v-responsive>
                </v-card>

            </v-col>

            <v-col
            cols="12"
            xs="12"
            xl="4"
            lg="4"
            md="6"
            sm="12"
            >
                <v-card>
                    <v-responsive :aspect-ratio="4/3">
                        <v-card-text>
                        Narocilo
                        </v-card-text>
                    </v-responsive>
                </v-card>

            </v-col>


            <v-col
            cols="12"
            xs="12"
            xl="4"
            lg="4"
            md="6"
            sm="12"
            >
                <v-card>
                    <v-responsive :aspect-ratio="4/3">
                        <v-card-text>
                        Narocilo
                        </v-card-text>
                    </v-responsive>
                </v-card>

            </v-col>


            <v-col
            cols="12"
            xs="12"
            xl="4"
            lg="4"
            md="6"
            sm="12"
            >
                <v-card>
                    <v-responsive :aspect-ratio="4/3">
                        <v-card-text>
                        Narocilo
                        </v-card-text>
                    </v-responsive>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>
