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
                <p>{{ i.itemDescription}}</p>
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
                        method="post" enctype="multipart/form-data">

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
                                    v-model="changeDiscount"
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
        width="800"
        height="600"
        >
            <v-card>
                <v-card-title class="headline">Dodajanje izdelka</v-card-title>
                    <v-card-actions>
                        <v-container>
                            <v-form
                            :lazy-validation="true"
                            class="ma-auto"
                            ref="form"
                            width="500"
                            >
                            {{ error }}
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                        label="Ime izdelka"
                                        v-model="newItemName"
                                        :rules="requiredInput"
                                        type="text"
                                        required
                                        ></v-text-field>

                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                        label="Cena izdelka"
                                        v-model.number="newItemPrice"
                                        required
                                        :value="newItemPrice"
                                        :rules="requiredInput"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-text-field
                                        v-model.number="newQuantity"
                                        required
                                        :rules="requiredInput"
                                        :value="newQuantity"
                                        label="Količina"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                        v-model="newDimension"
                                        label="Dimenzija"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-select
                                        :items="colors"
                                        label="Barva"
                                        v-model="newColor"
                                        dense
                                        solo
                                        required
                                        :rules="requiredInput"
                                        >
                                        </v-select>
                                    </v-col>
                                    <v-col>
                                        <v-select
                                        :items="subCategorie"
                                        v-model="newCategory"
                                        label="Kategorija"
                                        :disabled="addNewCategorie ? true : false"
                                        dense
                                        required
                                        :rules="requiredInput"
                                        solo
                                        >
                                        </v-select>
                                    </v-col>
                                </v-row>

                                <v-checkbox
                                v-model="addNewCategorie"
                                label="Dodaj novo kategorijo"
                                ></v-checkbox>

                                <v-text-field
                                label="Dodaj novo kategorijo"
                                v-if="addNewCategorie"
                                v-model="customCategory"
                                >
                                </v-text-field>

                                <v-file-input
                                label="File input"
                                v-model="newImage"
                                multiple
                                required
                                :rules="requiredInput"
                                @change="previewImages()"
                                accept="image/*"
                                ></v-file-input>

                                <v-row v-if="showImages">
                                    <v-col
                                    v-for="image in showImages"
                                    cols="3"
                                    :key="image.id">
                                        <v-img
                                        v-if="primaryPicture == image.imgName"
                                        class="primaryImg"
                                        height="100"
                                        :src="image.url"/>


                                        <v-img
                                        v-else
                                        @click="selectPrimaryImage(image.imgName)"
                                        height="100"
                                        :src="image.url"/>
                                    </v-col>
                                </v-row>

                                <v-textarea
                                label="Opis"
                                v-model="newItemDescription"
                                required
                                :rules="requiredInput"
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


       <!--Add new item-->
        <v-bottom-navigation
        app
        fixed
        >
            <v-btn
            @click="addItem = !addItem"

            >
            <span>Dodaj</span>
            <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-bottom-navigation>

         <!--If change of item was succesfull it displays this bottom navigation -->
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
            newImage: [],
            customCategory: '',
            newItemDescription: '',
            primaryPicture: '',
            //Change item data
            itemName: '',
            quantity: '',
            itemPrice: '',
            description: '',
            discount: '',
            changeDiscount: '',
            //Other variables
            selectedItemId: '',
            Search: '',
            change: false,
            addNewCategorie: false,
            showImages: [],
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
            ],
            //Rules and validation
            requiredInput:[
                v => !!v || 'Pozabili ste vnesti vrednost v to polje!'
            ],
            error: ''

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
                "Description": this.description,
                "Discount": this.changeDiscount
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
                if(results.data == 1){
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


                Axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

                let data = new FormData()
                let categoriesChoose = this.addNewCategorie ?  this.customCategory : this.newCategory

                for(let i = 0; i < this.newImage.length; i++){
                    data.append("images[]", this.newImage[i])
                }



                if(!this.checkModels()){
                    this.error = "Nekatera polja manjkajo!"
                    return false
                }


                data.append('itemName', this.newItemName)
                data.append('cena', this.newItemPrice)
                data.append('kolicina', this.newQuantity)
                data.append('Dimensions', this.newDimension)
                data.append('Categorie', categoriesChoose)
                data.append('Color', this.newColor)
                data.append('Description', this.newItemDescription)
                data.append('itemImg', this.primaryPicture)


                Axios.post('/api/items/add', data)
                .then((results)=>{
                    if(results.data == 1){
                        this.getItemsForAdmin();
                        this.addItem = false
                        this.successAdd = true
                    }



                })
                .catch(error =>{
                    if (error.response) {
                        console.log(error.response.data.errors.cena);
                    }
                })
            },

            previewImages(){
                for(let i = 0; i < this.newImage.length; i++){
                    this.showImages.push({url: URL.createObjectURL(this.newImage[i]), imgName: this.newImage[i].name, id:i})
                }
            },

            selectPrimaryImage(e){
                this.primaryPicture = e
            },
            checkModels(){
                let categoriesChoose = this.addNewCategorie ?  this.customCategory : this.newCategory
                if(this.newItemName == "" || this.newItemPrice == "" || this.newQuantity == "" || this.newDimension == "" || this.newColor == "" || categoriesChoose == "" || this.newImage == "" || this.newItemDescription == "" || this.primaryPicture == ""){
                   return false;
                }
                return true
            }
    },

    mounted(){
        this.getItemsForAdmin();
    }
}
</script>

<style>
    .primaryImg{
        border: solid 3px red;
    }
</style>
