<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Favourites;

class favouritesController extends Controller
{
    /**
    * Array where all items are stored that were found
    */
    public $items = [];

    /**
    * Get all the info about the item
    */
    public function getDataInfo(){

    }
    /**
    * Get all items that are stored in favourites
    */
    public function getFavourites(){
        if(Auth::check() != null){
            $items = Favourites::where('userId', Auth::id())->get();

        }
    }
    /**
    * Adds item to favourites, if user is registerd
    */
    public function addToFavourites(Request $request){

        $itemId = $request->input('itemId');

        if(Auth::check() != null){

            $check = Favourites::where([
                ["userId", '=' , Auth::id()],
                ["itemId", '=',  $itemId]
            ])->count();



            if($check == 1){
                Favourites::where([
                    ["userId", "=" ,Auth::id()],
                    ["itemId", "=", $itemId]
                ])->delete();

                return response("Deleted", 200);
            }else{
                $favourites = new Favourites();

                $favourites->userId = Auth::id();
                $favourites->itemId = $itemId;

                if($favourites->save()){
                    return response("Ok", 200);
                }
                return response("Error", 500);
            }
        }
    }
}
