import Axios from 'axios'

var instace = Axios.create({
    baseURL: 'http://127.0.0.1:8000',
})

export default{
    /**
     * Call api and retrives all the items on the first page
     * @param {int} id page number
     */
    getItems(id){
        return instace.get('/api/items/'+id)
    },

    /**
     * Get all items for admin
     */
    getItemsForAdmin(){
        return instace.get('/api/items/')
    },
    getAllOrders(){
        return instace.get('/api/orders')
    },
    filterFinished(){
        return instace.get('/api/orders/finished')
    },
    filterComplete(){
        return instace.get('/api/orders/complete')
    },
    filterOldest(){
        return instace.get('/api/orders/oldest')
    },
    filterLatest(){
        return instace.get('/api/orders/latest')
    },

    /**
     * Get items by search bar
     * @param {OBJECT} data data that will be send to database
     */
    searchItem(data){
        return instace.post('/api/items/search', {data: data})
    },
    /**
     * Sends contact data to database
     * @param {OBJECT} data data that will be send to database
     */
    sendContact(data){
        return instace.post('/api/contact/add', data)
    },
    /**
     * Get all contact
     */
    getContact(){
        return instace.get('/api/contact')
    }
}
