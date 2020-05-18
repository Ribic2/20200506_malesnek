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
     *
     * @param {*} product
     */
    addItemToCart(product){
        return instace.post('/api/cart/add', product)
    }

}
