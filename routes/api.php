<?php

use App\Contacts;
use App\Http\Resources\itemResource;
use App\Http\Resources\itemReviewResource;
use App\Http\Resources\orderResource;
use App\itemReview;
use App\Items;
use App\Order;
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

//Api path for items
Route::get('/items/{page}', function($page){
    return itemResource::collection(Items::paginate(10, ['*'], 'page', $page));
});
//Get data for 1 item only
Route::get('/item/{id}', function($id){
    return itemResource::collection(Items::where('itemId', $id)->get());
});
//Reviews for 1 item only
Route::get('/item/{id}/reviews', function($id){
    return itemReviewResource::collection(Items::findOrFail($id)->Review()->get());
});

//CONTACTS
Route::get('/contact', function(){
    return Contacts::all();
});
Route::post('/contact/add', 'ContactController@getContact');

//ADMIN ROUTES

//Used to call all items

Route::get('/items', function(){
    return itemResource::collection(Items::all());
});

Route::post('/items/change', 'itemController@changeItem');
Route::post('/items/delete', 'itemController@deleteItem');
Route::post('/items/search', 'itemController@searchForItems');
Route::post('/items/add', 'itemController@addItem');


Route::post('/Order/confirm', 'OrderController@confirmOrder');
Route::get('/orders', function(){
    return orderResource::collection(OrderIdStore::all()->unique()->keyBy('OrderId'));
});
//Filter for admin page - ORDERS
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


Route::post('/order/add', 'OrderController@reciveOrder');
Route::middleware('auth:api')->get('/profile','AuthController@getUserData');
