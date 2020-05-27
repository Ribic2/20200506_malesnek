<?php

namespace App\Http\Controllers;

use App\itemReview;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Items;
use App\Order;
use Illuminate\Contracts\Validation\Validator;

class itemController extends Controller
{
    /**
     * Function  that searches for items from user input
     */
    public function searchForItems(Request $request){
        $data =  $request->input('data');
        $returnData = Items::where('itemName', 'like', '%'.$data.'%')->get();

        return $returnData;
    }

    public function changeItem(Request $request){

        $itemId = $request->input('itemId');
        $itemName = $request->input('itemName');
        $Quantity = $request->input('količina');
        $itemPrice = $request->input('cena');
        $Description = $request->input('Description');

        //Validation
        $rules = [
            'cena' => 'required|numeric',
            'kolicina' => 'required|numeric'
        ];

        $customMessage = [
            'numeric' => "Napačna vrednsot pri :attribute"
        ];

        $change = Items::where('itemId', $itemId)
        ->update([
            'itemName' => $itemName,
            'availableQuantity' => $Quantity,
            'itemPrice' => $itemPrice,
            'itemDescription' => $Description
        ]);

        //Validates if provided items are correct type
        $this->validate($request, $rules, $customMessage);

        if($change){
            return 1;
        }
        return 0;
    }

    public function deleteItem(Request $request){
        $id = $request->input('itemId');
        $delete = Items::destroy($id);

        //Delete all orders and item reviews where selected item is present
        Order::where('itemId', $id)->delete();
        itemReview::where('itemId', $id)->delete();

        if($delete){
            return 1;
        }
        return 0;
    }

    public function addItem(Request $request){
        $itemName = $request->input('itemName');
        $itemPrice = $request->input('cena');
        $Quantity = $request->input('kolicina');
        $Dimension = $request->input('Dimensions');
        $Categorie = $request->input('Categorie');
        $Color = $request->input('Color');
        $Description = $request->input('Description');

        //Validation
        $rules = [
            'cena' => 'required|numeric',
            'kolicina' => 'required|numeric'
        ];

        $customMessage = [
            'numeric' => "Napačna vrednsot pri :attribute"
        ];

        //Validates if provided items are correct type
        $this->validate($request, $rules, $customMessage);


        $item = new Items;

        $item->itemName = $itemName;
        $item->itemPrice = $itemPrice;
        $item->availableQuantity = $Quantity;
        $item->dimensions = $Dimension;
        $item->categorie =  $Categorie;
        $item->colors = $Color;
        $item->itemDescription = $Description;

        $checkInsert = $item->save();

        if($checkInsert){
            return 1;
        }
        return 0;
    }
}
