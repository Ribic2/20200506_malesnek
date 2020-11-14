<?php

use App\Contact;
use App\Http\Resources\itemResource;
use App\Http\Resources\itemReviewResource;
use App\Http\Resources\orderResource;
use App\itemReview;
use App\Item;
use App\Order;
use Illuminate\Support\Facades\Auth;
use App\OrderIdStore;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Reset password

Route::get('/items/unlisted', function(){
    return itemResource::collection(Item::where('delisted', 1)->get());
})->middleware('auth:api', 'check_admin');

Route::get('/items/listed', function(){
    return itemResource::collection(Item::where('delisted', 0)->get());
})->middleware('auth:api', 'check_admin');

// Send reset password mail
Route::post('reset-password', 'resetPasswordController@sendPasswordResetLink');
// handle reset password form process
Route::post('reset/password', 'resetPasswordController@callResetPassword');



Route::post('/review/add', 'itemController@addReview');




//Api path for items
Route::get('/items/{page}', function($page){
    return itemResource::collection(Item::where('delisted', 0)->paginate(12, ['*'], 'page', $page));
});

Route::post('/check/cart', 'OrderController@checkCartItems');

Route::get('/items/category/{category}', function($category){
    return itemResource::collection(Item::where([
        ['categorie', '=', $category],
        ['delisted', '=' , 0]
    ])->get());
});

Route::get('/items/category/{category}/{page}', function($category, $page){
    return itemResource::collection(Item::where('categorie', $category)->paginate(12, ['*'], 'page', $page));
});
//Get data for 1 item only
Route::get('/item/{id}', function($id){
    return itemResource::collection(Item::where('itemId', $id)->get());
});

Route::get('/item/{id}/images', 'itemController@getImages');
//Reviews for 1 item only

Route::get('/item/{id}/reviews', function($id){
    return itemReviewResource::collection(Item::findOrFail($id)->Review()->get());
});

//Confirm newly registerd user
Route::post('/confirmation', 'AuthController@confirmMail');
//ADMIN ROUTES

//Used to call all items

Route::get('/items', function(){
    return itemResource::collection(Item::all());
});



//Get users purchase history
Route::get('/orders', function(){
    return orderResource::collection(OrderIdStore::all()->unique()->keyBy('OrderId'));
});


Route::post('/check/favourites', 'itemController@checkFavourites');
Route::post('/add/favourites', 'favouritesController@addToFavourites')->middleware('auth:api');
Route::get('/get/favourites', 'favouritesController@getFavourites')->middleware('auth:api');

Route::post('/user/orders/history', 'OrderController@getAllUsersOrder')->middleware('auth:api');


Route::middleware('auth:api', 'check_admin')->group(function(){
    //Orders
    Route::get('/orders/finished', function(){
        return orderResource::collection(OrderIdStore::all()->unique()->keyBy('OrderId'))->where('deliveryStatus', 0);
    });
    Route::get('/orders/complete', function(){
        return orderResource::collection(OrderIdStore::all()->unique()->keyBy('OrderId'))->where('deliveryStatus', 1);
    });
    Route::get('/orders/oldest', function(){
        return orderResource::collection(OrderIdStore::all()->unique()->keyBy('OrderId'))->sortBy('Created_at');
    });
    Route::get('/orders/latest', function(){
        return orderResource::collection(OrderIdStore::all()->unique()->keyBy('OrderId'))->sortDesc();
    });

    Route::post('/Order/confirm', 'OrderController@confirmOrder');
    Route::post('/Order/denied', 'OrderController@orderDenied');

    Route::post('/items/change', 'itemController@changeItem');
    Route::post('/items/delete', 'itemController@deleteItem');
    Route::post('/items/search', 'itemController@searchForItems');
    Route::post('/item/delist', 'itemController@delistItem');
});

Route::post('/items/add', 'itemController@addItem');

Route::post('/order/add', 'OrderController@reciveOrder');

//Authenticatble api paths


Route::middleware('auth:api')->post('/user/change/basic', 'AuthController@changeUserBasics');
Route::middleware('auth:api')->post('/user/change/residence', 'AuthController@changeResidenceInfo');


// Api V1

// Register
Route::post('/user/register', 'RegisterController@register');

// Sends contact
Route::post('/contact/add', 'ContactController@sendContact');

//User login
Route::post('/user/login', 'LoginController@login');

//Item categories
Route::get('/categories', 'ItemController@getCategories');


Route::middleware('auth:api')->group(function (){
    Route::post('/user/data','AuthController@getUserData');


    //Contact
    Route::get('/contact/all', 'ContactController@getContacts');
    Route::get('/contact/all/oldest', 'ContactController@getOldestContacts');

    // Admin authentication is required
    Route::get('/user/all', 'AuthController@getAllUsers')->middleware('check.admin');
    Route::delete('/user/{id}/delete', 'AuthController@deleteUser')->middleware('check.admin');
    Route::patch('/user/{id}/change/admin', 'AuthController@changeAdminRole')->middleware('check.admin');

});




