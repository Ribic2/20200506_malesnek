<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Items;

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
}
