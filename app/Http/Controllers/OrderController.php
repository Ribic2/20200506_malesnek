<?php

namespace App\Http\Controllers;

use App\Order;
use App\OrderIdStore;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\mail\orderConfirmed;

use Stripe\Exception\CardException;
Use Cartalyst\Stripe\Stripe;
use Cartalyst\Stripe\Charge;

class OrderController extends Controller
{
    /**
     * Save recived order
     */
    function reciveOrder(Request $request){

        $userId = $request->input('userId');
        $quantity = $request->input('quantity');
        $fullPrice = $request->input('fullPrice');
        $orders = $request->input('products');

        $uiid = (string) Str::orderedUuid();

        $orderIds = new OrderIdStore();
        $orderIds->orderId = $uiid;
        $orderIds->user_Id = $userId;
        $orderIds->ordered_time = date("Y-m-d H:i:s");
        $orderIds->yearOfDelivery = date('Y');
        $orderIds->monthOfDelivery = date('m');
        $orderIds->deliveryStatus = 0;
        $orderIds->save();


        for($i = 0; $i < count($orders); $i++){
            $order = new Order();

            $order->userId = $userId;
            $order->itemId = $orders[$i];
            $order->Quantity = $quantity[$i];
            $order->orderId = $uiid;

            $order->save();
        }

        //Stripe setup
        try {
            $stripe = new \Stripe\StripeClient('sk_test_imllcXKzgyeOqz5wbc4OAhXp00OFK9yIwp');

            $stripe->charges->create([
                'amount' => $fullPrice*100,
                'currency' => 'eur',
                'source' => $request->input('stripeToken'),
            ]);


            return 1;
        }
        catch (CardException $e) {
            return back()->withErrors('Error! ' . $e->getMessage());
        }



    }
    /**
     * Confirm order status
     */
    public function confirmOrder(Request $request){
        $id =  $request->input('confirmation');

        $changeOrderStatus = OrderIdStore::where('OrderId', $id)
        ->update(['deliveryStatus' => 1]);

        if($changeOrderStatus){
            //Sends mail to client
            Mail::to('vid.bukovec8361@gmail.com')->send(new orderConfirmed());
            return 1;
        }
        return 0;
    }
}
