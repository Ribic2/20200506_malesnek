<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Function that check if user is authenticated
     */
    function getUser(Request $request){

        if(Auth::user() != null){
            if ($request->user()) {
                return Auth::user();
            }
        }
        //return json_encode($request->user());
    }
    function getUserData(){
        if(Auth::check()){
            $user = Auth::user();
            $returnCredentials = ["Name"=>$user->Name, "Surname"=> $user->Surname, "Email"=>$user->email, "Phone"=>$user->Telephone];
            return response(['user'=>$returnCredentials]);
        }
    }

}
