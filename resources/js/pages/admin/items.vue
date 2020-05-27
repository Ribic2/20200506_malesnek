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
                    <v-btn @click="getIdToChange(i)">Spremeni</v-btn>
                    <v-btn @click="getIdToDelete(i)">Izrbriši</v-btn>
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
                                v-model="itemName"
                                ></v-text-field>

                                <v-text-field
                                label="Količina"
                                v-model="quantity"
                                ></v-text-field>

                                <v-text-field
                                label="Cena izdelka"
                                v-model="itemPrice"
                                ></v-text-field>

                                <v-textarea
                                label="Opis"
                                v-model="description"
                                no-resize
                                >
                                </v-textarea>
                                <v-checkbox label="Razprodaja" v-model="discount"></v-checkbox>

                                <div v-if="discount">
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
                    @click="changeData()"
                >
                Spremeni
                </v-btn>

                <v-btn
                    color="green darken-1"
                    text
                    @click="change = false"
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
                    @click="deleteItemFunction()"
                >
                Izbriši
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

        <!-- Dialog for adding item-->
        <v-dialog
        v-model="addItem"
        width="500"
        height="600"
        >
            <v-card>
                <v-card-title class="headline">Dodajanje izdelka</v-card-title>
                    <v-card-actions>
                        <v-container>
                            <v-form
                            class="ma-auto"
                            width="500"
                            >
                                    <v-text-field
                                    label="Ime izdelka"
                                    v-model="newItemName"
                                    ></v-text-field>

                                    <v-text-field
                                    label="Cena izdelka"
                                    v-model="newItemPrice"
                                    ></v-text-field>

                                    <v-text-field
                                    v-model="newQuantity"
                                    label="Količina"
                                    ></v-text-field>

                                    <v-text-field
                                    v-model="newDimension"
                                    label="Dimenzija"
                                    ></v-text-field>

                                    <v-file-input multiple label="File input"></v-file-input>

                                    <v-select
                                    :items="subCategorie"
                                    v-model="newCategory"
                                    label="Kategorija"
                                    dense
                                    solo
                                    >
                                    </v-select>

                                    <v-select
                                    :items="colors"
                                    label="Barva"
                                    v-model="newColor"
                                    dense
                                    solo
                                    >
                                    </v-select>

                                    <v-textarea
                                    label="Opis"
                                    v-model="newItemDescription"
                                    no-resize
                                    >
                                    </v-textarea>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="addNewItem()"
                                        >
                                        Dodaj
                                        </v-btn>

                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="addItem = false"
                                        >
                                        Preklic
                                        </v-btn>
                                    </v-card-actions>

                            </v-form>
                        </v-container>
                    </v-card-actions>
            </v-card>
        </v-dialog>

        <!--If change of item was succesfull it displays this bottom navigation -->
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


        <v-bottom-sheet v-model="success">
            <v-sheet class="text-center" height="200px">
                <div class="py-3">Izdelek uspešno spremenjen!</div>
            </v-sheet>
        </v-bottom-sheet>

        <!-- If item is successfully added to database it displays text -->
        <v-bottom-sheet v-model="successAdd">
            <v-sheet class="text-center" height="200px">
                <div class="py-3">Izdelek uspešno dodan!</div>
            </v-sheet>
        </v-bottom-sheet>
    </v-container>

</template>

<script>
import store from '../../store/index'
import Axios from 'axios'

export default {
    data(){
        return{
            //Add new item data
            newItemName: '',
            newItemPrice: '',
            newQuantity: '',
            newDimension: '',
            newCategory: '',
            newColor: '',
            newItemDescription: '',
            //Change item data
            itemName: '',
            quantity: '',
            itemPrice: '',
            description: '',
            discount: '',
            //Other variables
            selectedItemId: '',
            Search: '',
            change: false,
            deleteItem: false,
            discount: false,
            success: false,
            successAdd: false,
            addItem: false,
            categories:[
                "Voščilnica",
            ],
            subCategorie:[
                "Unikat artikel",
                "Redni artikel"
            ],
            colors:[
                "Red",
                "Blue",
                "Purple"
            ]
        }
    },
    methods:{
        getItemsForAdmin(){
            return this.$store.dispatch('getItemsForAdmin')
        },
        searchForItems(){
            return this.$store.dispatch('searchItems', this.Search)
        },
        changeItemData(e){
            return this.$store.dispatch('changeItemData', e)
        },
        changeData(){
            let ChangedData = {
                "itemId": this.selectedItemId,
                "itemName": this.itemName,
                "količina": this.quantity,
                "cena": this.itemPrice,
                "Description": this.description
            }
            Axios.post('/api/items/change', ChangedData)
            .then((results)=>{
                if(results.data = 1){
                    this.getItemsForAdmin()
                    this.success = true
                }
            })

            this.selectedItemId = null
            this.change = false

        },
        deleteItemFunction(){
            Axios.post('/api/items/delete',  {itemId: this.selectedItemId})
            .then((results)=>{
                if(results.data = 1){
                    this.getItemsForAdmin()
                }
            })

            this.selectedItemId = null
            this.deleteItem = false
        },
        getIdToDelete(e){
            this.deleteItem = true
            this.selectedItemId = e.itemId
        },
        getIdToChange(e){
            this.change = true
            this.selectedItemId = e.itemId
            this.itemName = e.itemName
            this.quantity = e.Quantity
            this.itemPrice = e.itemPrice
            this.description = e.itemDescription
        },
        addNewItem(){
            let newItemData = {
                "itemName": this.newItemName,
                "cena": this.newItemPrice,
                "kolicina": this.newQuantity,
                "Dimensions": this.newDimension,
                "Categorie": this.newCategory,
                "Color": this.newColor,
                "Description": this.newItemDescription
            }

            Axios.post('/api/items/add', newItemData)
            .then((results)=>{
                if(results.data == 1){
                    this.getItemsForAdmin();
                    this.addItem = false
                    this.successAdd = true
                }

            })
        }
    },
    mounted(){
        this.getItemsForAdmin();
    }
}
</script>
