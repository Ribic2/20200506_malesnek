<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Function that check if user is authenticated
     */
    function getUserData(){
        if(Auth::check()){
            $user = Auth::user();
            $returnCredentials = ["id"=>$user->user_id, "Name"=>$user->Name, "Surname"=> $user->Surname, "Email"=>$user->email, "Phone"=>$user->Telephone];
            return response(['user'=>$returnCredentials]);
        }
    }
    /**
     * Check if user is admin
     */
    function checkIfUserIsAdmin(){

    }

}
