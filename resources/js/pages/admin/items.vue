<template>
    <v-container>
        <v-app-bar>
            <v-toolbar-title>Izdelki</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
            class="mt-7"
            label="Išči izdelke"
            type="text"
            v-on:keyup="searchForItems()"
            v-model="Search"
            solo
            ></v-text-field>
        </v-app-bar>
        <v-divider></v-divider>
        <v-expansion-panels>
            <v-expansion-panel
            v-for="i in this.$store.state.admin.items"
            v-bind:key="i.itemId"
            >

            <v-expansion-panel-header>
            {{ i.itemName }}
            </v-expansion-panel-header>

            <v-expansion-panel-content>
               {{ i.itemDescription}}
                <v-btn-toggle>
                    <v-btn @click="change = !change">Spremeni</v-btn>
                    <v-btn @click="deleteItem = !deleteItem">Izrbriši</v-btn>
                </v-btn-toggle>
            </v-expansion-panel-content>

            </v-expansion-panel>
        </v-expansion-panels>

        <!--Change items data-->
        <v-dialog
        v-model="change"
        width="500"
        >
            <v-card>
                <v-card-title class="headline">Spremeni informacije o izdelku</v-card-title>

                <v-card-actions>
                    <v-container>
                         <v-form
                        class="ma-auto"
                        width="500"
                        >
                                <v-text-field
                                label="Ime izdelka"
                                ></v-text-field>

                                <v-text-field
                                label="Količina"
                                ></v-text-field>

                                <v-text-field
                                label="Cena izdelka"
                                ></v-text-field>

                                <v-textarea
                                label="Opis"
                                no-resize
                                >
                                </v-textarea>
                                <v-checkbox label="Razprodaja" v-model="discount"></v-checkbox>

                                <div v-if="discount">
                                    <v-divider></v-divider>
                                    <v-text-field
                                    label="Znižanje v odstotkih"
                                    ></v-text-field>
                                </div>
                        </v-form>
                    </v-container>
                </v-card-actions>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                Spremeni
                </v-btn>

                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                Preklici
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!--Delete item -->
        <v-dialog
        v-model="deleteItem"
        max-width="290"
        >
            <v-card>
                <v-card-title class="headline">Izbriši izdelek?</v-card-title>

                <v-card-text>
                    Ali ste prepričani da želite izbrisati izdelek? Enkrat ko je izdelek izbrisan ga ni mogoče dobiti nazaj.
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="green darken-1"
                    text
                    @click="deleteItem = false"
                >
                Izrbriši
                </v-btn>

                <v-btn
                    color="green darken-1"
                    text
                    @click="deleteItem = false"
                >
                Preklic
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
        max-width="290"
        v-model="addItem"
        >
            <v-card>
                <v-card-title class="headline">Izbriši izdelek?</v-card-title>

                <v-card-text>
                    Ali ste prepričani da želite izbrisati izdelek? Enkrat ko je izdelek izbrisan ga ni mogoče dobiti nazaj.
                </v-card-text>

                <v-card-actions>


                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-bottom-navigation
            fixed
        >
            <v-btn
            @click="addItem = !addItem"

            >
            <span>Dodaj</span>
            <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-bottom-navigation>

    </v-container>

</template>

<script>
import store from '../../store/index'

export default {
    data(){
        return{
            Search: '',
            change: false,
            deleteItem: false,
            discount: false,
            addItem: false
        }
    },
    methods:{
        getItemsForAdmin(){
            return this.$store.dispatch('getItemsForAdmin')
        },
        searchForItems(){
            return this.$store.dispatch('searchItems', this.Search)
        }
    },
    mounted(){
        this.getItemsForAdmin();
    }
}
</script>
