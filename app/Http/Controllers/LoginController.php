<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\ThrottlesLogins;

class LoginController extends Controller
{

    use ThrottlesLogins;
    /**
     * Function that sets username to email, so login throttling will work
     */
    public function username()
    {
        return 'email';
    }
    /**
     * Login function that authenticates user
     */
    public function login(Request $request){


        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if($this->hasTooManyLoginAttempts($request)){
            $this->fireLockoutEvent($request);
            return $this->sendLockoutResponse($request);
        }

        $credentials = $request->only('email', 'password');


        if(Auth::attempt($credentials)){
            $this->clearLoginAttempts($request);
            return response()->json(['authentication' => true]);
        }
        else{
            $this->incrementLoginAttempts($request);
            return response()->json(['authentication' => false]);
        }



    }
}
