<?php

namespace App\Http\Controllers;

use App\User;
use App\Mail\authenticateUserMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{

    //Checks if email is already used
       public function checkIfEmailExists($email){
        $checkEmail = User::where('email', $email)->count();
        if($checkEmail == 1){
            return false;
        }
        return true;

    }
    //Registers user in cart, if he is not registerd
    public function registerInCart(Request $request){
        $name = $request->input('name');
        $surname = $request->input('surname');
        $phone = $request->input('phone');
        $email = $request->input('email');
        $password = $request->input('password');
        $houseNumberAndStreet = $request->input('houseNumberAndStreet');
        $postcode = $request->input('postcode');



        if($this->checkIfEmailExists($email)){
            $newUser = new User;

            $newUser->Name = $name;
            $newUser->Surname = $surname;
            $newUser->email = $email;
            $newUser->password = Hash::make($password);
            $newUser->Telephone = $phone;
            $newUser->isAuth = 0;
            $newUser->isNewCustomer = 0;
            $newUser->houseNumberAndStreet = $houseNumberAndStreet;
            $newUser->Postcode = $postcode;
            $newUser->isEmployee = 0;

            if($newUser->save()){

                $credentials = $request->validate([
                    'email' => 'required|email',
                    'password' => 'required'
                ]);

                if(Auth::attempt($credentials)){
                    $user = Auth::user();

                    $accessToken = $user->createToken('accessToken')->accessToken;

                    $returnCredentials = ["id"=>$user->user_id,"Name"=>$user->Name, "Surname"=> $user->Surname, "Email"=>$user->email, "Phone"=>$user->Telephone];
                    return response(['user'=>$returnCredentials, 'access_token'=> $accessToken, 'authentication' => true]);
                }
            }
            else{
                return response(['error'=>"Napaka pri registraciji"]);
            }

        }
    }
    public function register(Request $request){
        $name = $request->input('name');
        $surname = $request->input('surname');
        $phone = $request->input('phone');
        $email = $request->input('email');
        $password = $request->input('password');


        if($this->checkIfEmailExists($email)){

            $newUser = new User;

            $newUser->Name = $name;
            $newUser->Surname = $surname;
            $newUser->email = $email;
            $newUser->password = Hash::make($password);
            $newUser->Telephone = $phone;
            $newUser->isAuth = 0;
            $newUser->isNewCustomer = 0;
            $newUser->isEmployee = 0;

            if($newUser->save()){

                //TODO - send authentication message

                //Mail::to($email)->send(new authenticateUserMail());



                if($newUser->save()){

                    $credentials = $request->validate([
                        'email' => 'required|email',
                        'password' => 'required'
                    ]);

                    if(Auth::attempt($credentials)){
                        $user = Auth::user();

                        $accessToken = $user->createToken('accessToken')->accessToken;

                        $returnCredentials = ["id"=>$user->user_id,"Name"=>$user->Name, "Surname"=> $user->Surname, "Email"=>$user->email, "Phone"=>$user->Telephone];
                        return response(['user'=>$returnCredentials, 'access_token'=> $accessToken, 'authentication' => true]);
                    }
                }
                else{
                    return response(['error'=>"Napaka pri registraciji"]);
                }

            }
            return "error";

        }
        //If it exits return error message
        return "obstaja";

    }
}
