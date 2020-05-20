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
     *Adds item to database if user is registerd
     * @param {*} product
     */
    addItemToCart(payload){
        return instace.post('/api/cart/add', payload)
    },

    /**
     *Gets user id and displays users cart that is stored in database
     * @param {INTEGER} id user id
     */
    getCartData(id){
        return instace.post('/api/cart/get', id)
    }

}
