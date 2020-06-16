<?php

namespace App\Http\Controllers;

use App\Items;
use App\Order;
use App\OrderIdStore;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\mail\orderConfirmed;
use App\User;
use App\Mail\confirmPacket;
use App\Mail\orderDenied;
use Stripe\Exception\CardException;
use App\Http\Resources\orderResource;
Use Cartalyst\Stripe\Stripe;
use Cartalyst\Stripe\Charge;

class OrderController extends Controller
{

    public $outOfStockItems = [];
    public $checkIfOutofStock = [];
    /**
     * Checks if provided item is avaiable is in stock
     */
    public function checksIfItemsIsAvaiable($itemId, $quantity){

        $checkStock = Items::select('availableQuantity')->where('itemId', $itemId)->get();

        if($checkStock[0]->availableQuantity == 0 || $checkStock[0]->availableQuantity - $quantity <= 0){
            array_push($this->outOfStockItems, $itemId);
            return false;
        }
        return true;

    }
    /**
     * Save recived order
     */
    public function reciveOrder(Request $request){

        $userId = $request->input('userId');
        $quantity = $request->input('quantity');
        $fullPrice = $request->input('fullPrice');
        $orders = $request->input('products');
        $uiid = (string) Str::orderedUuid();

        for($i = 0; $i < count($orders); $i++){
            $this->checksIfItemsIsAvaiable($orders[$i], $quantity[$i]);
        }

        if(count($this->outOfStockItems) == 0){


            $orderIds = new OrderIdStore();
            $orderIds->orderId = $uiid;
            $orderIds->user_Id = $userId;
            $orderIds->ordered_time = date("Y-m-d H:i:s");
            $orderIds->yearOfDelivery = date('Y');
            $orderIds->monthOfDelivery = date('m');
            $orderIds->deliveryStatus = 0;
            $orderIds->save();

            for($x = 0; $x < count($orders); $x++){

                $changeQuantiy = Items::select('availableQuantity')->where('itemId', $orders[$x])->get();

                $newQuantity = $changeQuantiy[0]->availableQuantity - $quantity[$x];

                Items::where('itemId', $orders[$x])->update(['availableQuantity' => $newQuantity]);

                $order = new Order();

                $order->userId = $userId;
                $order->itemId = $orders[$x];
                $order->Quantity = $quantity[$x];
                $order->orderId = $uiid;

                $order->save();
            }

            if($request->input('typeOfPayment') == 'home'){

                return 1;
            }
            //Stripe setup
            try {
                $stripe = new \Stripe\StripeClient('sk_test_imllcXKzgyeOqz5wbc4OAhXp00OFK9yIwp');

                $stripe->charges->create([
                    'amount' => $fullPrice*100,
                    'currency' => 'eur',
                    'source' => $request->input('stripeToken'),
                ]);

                $email = User::select('email')->where('user_id', $userId)->get();
                Mail::to($email[0]->email)->send(new orderConfirmed($orders, $quantity, $fullPrice, $userId));

                return redirect('/checkout');
            }
            catch (CardException $e) {
                return back()->withErrors('Error! ' . $e->getMessage());
            }

        }

        return response()->json(['itemsOutOfStock'=> $this->outOfStockItems]);
    }
    /**
     * Confirm order status
     */
    public function confirmOrder(Request $request){
        $id =  $request->input('confirmation');


        $idUser = Order::select('userId')->where('OrderId', $id)->get();

        $name = User::select('Name')->where('user_id', $idUser[0]->userId)->get();
        $email = User::select('email')->where('user_id', $idUser[0]->userId)->get();

        $changeOrderStatus = OrderIdStore::where('OrderId', $id)
        ->update(['deliveryStatus' => 1]);

        if($changeOrderStatus){
            Mail::to($email[0]->email)->send(new confirmPacket($name[0]->Name));
            return 1;
        }
        return 0;
    }
    /**
     * Order denied
     */
    public function orderDenied(Request $request){
        $id = $request->input('id');
        $idUser = Order::select('userId')->where('OrderId', $id)->get();

        OrderIdStore::where('OrderId', $id)->delete();
        Order::where('orderId', $id)->delete();

        $email = User::select('email')->where('user_id', $idUser[0]->userId)->get();

        Mail::to($email[0]->email)->send(new orderDenied());
        return 1;

    }


    /**
     * Check if all items are aviable
     */
    public function checkCartItems(Request $request){
        $cart = $request->input('cart');

        for($i = 0; $i < count($cart); $i++){

            $item = Items::select('availableQuantity')->where('itemId', $cart[$i]["product"]["itemId"])->get();
            $checkIfItemExists = Items::where('itemId' ,$cart[$i]["product"]["itemId"])->get();

            if($checkIfItemExists && ($item[0]->availableQuantity == 0 || $item[0]->availableQuantity == null)){
                array_push($this->checkIfOutofStock, $cart[$i]["product"]["itemId"]);
            }

        }

        return $this->checkIfOutofStock;
    }

    //Get user order history
    public function getAllUsersOrder(Request $request){
        $user_id = $request->input("userId");

        return orderResource::collection(OrderIdStore::all()->unique()->keyBy('OrderId'))->where('user_id', $user_id);
    }
}
