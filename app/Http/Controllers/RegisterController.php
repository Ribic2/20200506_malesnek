<?php

namespace App\Http\Controllers;

use App\Rules\checkForNumbers;
use App\User;
use App\Rules\oneCharUpper;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    /**
     * Checks if email is already registered
     * @param string $email
     * @return bool
     */
    public function checkEmail(string $email): bool
    {
        $checkForEmail = User::where('Email', $email)->count();

        if($checkForEmail == 1){
            return false;
        }
        return true;
    }

    /**
     * Registers user
     * @param Request $request
     * @return JsonResponse
     */
    public function register(Request $request): JsonResponse
    {
        // Checks if all the data was provided
        if(!$request->filled(['password', 'email', 'name', 'surname', 'phone'])){
            abort(403, "Nekaj podatkov manjka!");
        }

        // Calls function to check if email was already registerd
        if(!$this->checkEmail($request->input('email'))){
            abort(400, "E-naslov je že registriran!");
        }

        // Validates given data
        $request->validate([
            'password' => ['min:8', new oneCharUpper, new checkForNumbers],
        ]);

        // Prepares to add new data to database
        $user = User::create([
            "name" => $request->input('name'),
            "surname" => $request->input('surname'),
            "email" => $request->input('email'),
            "Telephone" => $request->input('phone'),
            "password" => Hash::make($request->input('password')),
            "isAuth" => false,
            "isGuest" => false,
            "isNewCustomer" => true
        ]);

        // Before saving it, token is created
        $token = $user->createTOken('accessToken');

        // Data is saved into database
        $user->save();

        // And response is sent
        return response()->json([
            "response" => "Uporabnik uspešno registriran!",
            "token" => $token->accessToken
        ]);
    }

}
