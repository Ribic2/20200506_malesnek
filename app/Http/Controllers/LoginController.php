<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Login function that authenticates user
     */
    public function login(Request $request){

        $email = $request->email;
        $password = $request->password;
        if(Auth::attempt(['email' => $email, 'password' => $password], true)){
            return response()->json(Auth::user(), 200);
        }
        return response()->json(['error' => 'broke']);



    }
}
