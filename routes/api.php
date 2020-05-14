<?php

use App\Http\Resources\itemResource;
use App\Http\Resources\itemReviewResource;
use App\itemReview;
use App\Items;
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
