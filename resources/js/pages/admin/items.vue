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
            </v-expansion-panel-content>

            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
import store from '../../store/index'

export default {
    data(){
        return{
            Search: ''
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
