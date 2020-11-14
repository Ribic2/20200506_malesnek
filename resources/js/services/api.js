import Axios from 'axios'

let instance = Axios.create({
    headers:{
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
})

export default{
    /**
     * Call api and retrieves all the items on the first page
     * @param {int} id page number
     */
    getItems(id){
        return instance.get('/api/items/'+id)
    },

    /**
     * Get all items for admin
     */
    getItemsForAdmin(){
        return instance.get('/api/items/')
    },
    getAllOrders(){
        return instance.get('/api/orders')
    },
    filterFinished(){
        return instance.get('/api/orders/finished')
    },
    filterComplete(){
        return instance.get('/api/orders/complete')
    },
    filterOldest(){
        return instance.get('/api/orders/oldest')
    },
    filterLatest(){
        return instance.get('/api/orders/latest')
    },

    /**
     * Get items by search bar
     * @param {OBJECT} data data that will be send to database
     */
    searchItem(data){
        return instance.post('/api/items/search', {data: data})
    },
    /**
     * Sends contact data to database
     * @param {{name: string, message: string, email: string}} data data that will be send to database
     */
    sendContact(data){
        return instance.post('/api/contact/add', data)
    },

    /**
     * Get information about item
     */
    getProductData(e){
        return instance.get('/api/item/'+e)
    },

    /**
     * Get all categories there are
     */
    getCategories(){
        return instance.get('/api/categories')
    },

    /**
     * Get items from specific category
     */
    getProductsSpecificCategory(category){
        return instance.get('/api/items/category/'+category)
    },
    getDelistedItems(){
        return instance.get('/api/items/listed')
    },
    getUnlistedItems(){
        return instance.get('/api/items/unlisted')
    },

    addToFavourites(payload){
        return instance.post('/api/add/favourites', payload)
    },
    getAllFavourites(){
        return instance.get('/api/get/favourites')
    },

    /**
     * Get all Contacts
     * @returns {Promise<AxiosResponse<any>>}
     */
    getContacts(){
        return instance.get('/api/contact/all')
    },

    /**
     * Get oldest contacts
     * @returns {Promise<AxiosResponse<any>>}
     */
    getOldestContacts(){
        return instance.get('/api/contact/all/oldest')
    },

    /**
     * Sends request to log in user
     * @param email
     * @param password
     * @returns {Promise<AxiosResponse<any>>}
     */
    login(email, password){
        return instance.post('/api/user/login', {email: email, password: password})
    },

    /**
     * Registers user
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    register(data){
        return instance.post('/api/user/register', data)
    },
    /**
     * Get users data
     * @returns {Promise<AxiosResponse<any>>}
     */
    getUsersData(){
        return instance.post('/api/user/data')
    },

    /**
     * Checks if user is admin
     * @returns {Promise<AxiosResponse<any>>}
     */
    checkIfAdmin(){
        return instance.post('/api/user/admin')
    },

    /**
     * Gets all users
     * @returns {Promise<AxiosResponse<any>>}
     */
    getAllUsers(){
        return instance.get('/api/user/all')
    },

    /**
     * Deletes user
     * @param id users id
     * @returns {Promise<AxiosResponse<any>>}
     */
    deleteUser(id){
        return instance.delete(`/api/user/${id}/delete`)
    },

    /**
     * Changes user status
     * @param id users id
     * @returns {Promise<AxiosResponse<any>>}
     */
    changeUserAdminStatus(id){
        return instance.patch(`/api/user/${id}/change/admin`)
    }
}
