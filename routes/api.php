<?php

use App\Contacts;
use App\Http\Resources\itemResource;
use App\Http\Resources\itemReviewResource;
use App\Http\Resources\orderResource;
use App\itemReview;
use App\Items;
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
    return itemResource::collection(Items::where('delisted', 1)->get());
})->middleware('auth:api', 'check_admin');

Route::get('/items/listed', function(){
    return itemResource::collection(Items::where('delisted', 0)->get());
})->middleware('auth:api', 'check_admin');

// Send reset password mail
Route::post('reset-password', 'resetPasswordController@sendPasswordResetLink');
// handle reset password form process
Route::post('reset/password', 'resetPasswordController@callResetPassword');


//User authentication login and register
Route::post('/user/login', 'LoginController@login');
Route::post('/user/register', 'RegisterController@register');
Route::post('/user/register/cart', 'RegisterController@registerInCart');

Route::post('/review/add', 'itemController@addReview');

//Item categories
Route::get('/categories', function(){
    return Items::select('Categorie')->distinct()->get();
});


//Api path for items
Route::get('/items/{page}', function($page){
    return itemResource::collection(Items::where('delisted', 0)->paginate(12, ['*'], 'page', $page));
});

Route::get('/items/category/{category}', function($category){
    return itemResource::collection(Items::where([
        ['categorie', '=', $category],
        ['delisted', '=' , 0]
    ])->get());
});

Route::get('/items/category/{category}/{page}', function($category, $page){
    return itemResource::collection(Items::where('categorie', $category)->paginate(12, ['*'], 'page', $page));
});
//Get data for 1 item only
Route::get('/item/{id}', function($id){
    return itemResource::collection(Items::where('itemId', $id)->get());
});

Route::get('/item/{id}/images', 'itemController@getImages');
//Reviews for 1 item only

Route::get('/item/{id}/reviews', function($id){
    return itemReviewResource::collection(Items::findOrFail($id)->Review()->get());
});

Route::post('/contact/add', 'ContactController@getContact');

//Confirm newly registerd user
Route::post('/confirmation', 'AuthController@confirmMail');
//ADMIN ROUTES

//Used to call all items

Route::get('/items', function(){
    return itemResource::collection(Items::all());
});



//Get users purchase history
Route::get('/orders', function(){
    return orderResource::collection(OrderIdStore::all()->unique()->keyBy('OrderId'));
});


Route::post('/check/favourites', 'itemController@checkFavourites');
Route::post('/user/orders/history', 'OrderController@getAllUsersOrder')->middleware('auth:api');

Route::middleware('auth:api', 'check_admin')->group(function(){

    //Contact
    Route::get('/contact', function(){
        return Contacts::all();
    });

    Route::get('/contact/latest', function(){
        return Contacts::latest()->get();
    });

    Route::get('/contact/oldest', function(){
        return Contacts::oldest()->get();
    });

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
    Route::post('/check/cart', 'OrderController@checkCartItems');
    Route::post('/Order/denied', 'OrderController@orderDenied');

    Route::post('/items/change', 'itemController@changeItem');
    Route::post('/items/delete', 'itemController@deleteItem');
    Route::post('/items/search', 'itemController@searchForItems');
    Route::post('/item/delist', 'itemController@delistItem');
    Route::post('/items/add', 'itemController@addItem');
});

Route::post('/order/add', 'OrderController@reciveOrder');

//Authenticatble api paths
Route::middleware('auth:api', 'check_admin')->post('/user/delete', 'authController@deleteUser');
Route::middleware('auth:api', 'check_admin')->post('/user/change/admin', 'authController@changeAdmin');
Route::middleware('auth:api')->get('/profile','AuthController@getUserData');
Route::middleware('auth:api')->get('/profile/admin','AuthController@checkIfAdmin');
Route::middleware('auth:api', 'check_admin')->get('/users/all', 'AuthController@getAllUsers');
