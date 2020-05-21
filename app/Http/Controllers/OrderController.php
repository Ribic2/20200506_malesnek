<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    function reciveOrder(Request $request){
        $userId = $request->input('userId');
        $quantity = $request->input('quantity');
        $orders = $request->input('products');

        $uiid = (string) Str::orderedUuid();



        for($i = 0; $i < count($orders); $i++){
            $order = new Order();

            $order->userId = $userId;
            $order->itemId = $orders[$i];
            $order->Quantity = $quantity[$i];
            $order->orderId = $uiid;

            $order->save();
        }


        return true;
    }
}
