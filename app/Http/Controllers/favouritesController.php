<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\itemResource;
use App\Favourites;
use App\Items;

class favouritesController extends Controller
{
    /**
    * Array where all items are stored that were found
    */
    public $items = [];

    /**
    * Get all the info about the item
    */
    public function getDataInfo($itemId){
        $item = Items::where('itemId', $itemId)->get();

        if($item != null){
            array_push($this->items, itemResource::collection(Items::where('itemId', $itemId)->get()));
        }
    }
    /**
    * Get all items that are stored in favourites
    */
    public function getFavourites(){
        if(Auth::check() != null){
            $items = Favourites::where('userId', Auth::id())->get();


            if(count($items) == 0){
                return response("ok", 200);
            }
            else{
                for($i = 0; $i < count($items); $i++){
                    $this->getDataInfo($items[$i]->itemId);
                }

                return $this->items;
            }
       }
    }
    /**
    * Adds item to favourites, if user is registerd
    */
    public function addToFavourites(Request $request){

        $itemId = $request->input('itemId');

        if(Auth::check() != null){

            /**
            * Checks if if item is already added or not
            * If it is, it get deleted, otherwise it adds it
            */
            $check = Favourites::where([
                ["userId", '=' , Auth::id()],
                ["itemId", '=',  $itemId]
            ])->count();


            //Delets the item
            if($check == 1){
                Favourites::where([
                    ["userId", "=" ,Auth::id()],
                    ["itemId", "=", $itemId]
                ])->delete();

                return 2;
            }

            //Adds it to database
            else{
                $favourites = new Favourites();

                $favourites->userId = Auth::id();
                $favourites->itemId = $itemId;

                if($favourites->save()){
                    return 1;
                }
                return response("Error", 500);
            }
        }
    }
}
