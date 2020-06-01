<?php

namespace App\Http\Controllers;

use App\Http\Resources\usersResource;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Function that check if user is authenticated
     */
    function getUserData(){
        if(Auth::check()){
            $user = Auth::user();
            $returnCredentials = ["id"=>$user->user_id,
            "Name"=>$user->Name,
            "Surname"=> $user->Surname,
            "Email"=>$user->email,
            "Phone"=>$user->Telephone,
            "isAuth"=>$user->isAuth,
            "isEmployee"=>$user->isEmployee,
            "isNewCustomer" => $user->isNewCustomer
            ];
            return response(['user'=>$returnCredentials]);

        }
    }
    /**
     * Check if user is admin
     */
    function checkIfAdmin(){
        //return Auth::user()->isEmployee;
        if(Auth::check() && Auth::user()->isEmployee == 1){
            return "ok";
        }
        return 0;

    }

}
