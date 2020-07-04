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

    /**
     * @param STRING email checks if email was already registerd
     * @return BOOL Returns response depending
     */
    public function checkIfEmailExists($email){
        $checkEmail = User::where([
            ['email', '=', $email],
            ['isGuest', '=', 0]
        ])->count();

        if($checkEmail){
            return true;
        }
        return false;

    }

    //Registers user in cart, if he is not registerd
    public function registerInCart(Request $request){
        $name = $request->input('name');
        $surname = $request->input('surname');
        $phone = $request->input('phone');
        $email = $request->input('email');
        $houseNumberAndStreet = $request->input('houseNumberAndStreet');
        $postcode = $request->input('postcode');
        $region = $request->input('region');

        $isAlreadyRegisterd = $request->input('isAlreadyRegisterd');

        /**
        * If user is already registerd but it's his/her first purchase
        */
        if($isAlreadyRegisterd){
            User::where('email', $email)->update([
                "Telephone" => $phone,
                "houseNumberAndStreet" => $houseNumberAndStreet,
                "Postcode" => $postcode,
                "Region"=>$region,
                "isNewCustomer" => 1,
                "IsGuest" => 0
            ]);

            return response(["response"=> "Ok"]);
        }
        else{

            /**
            *  Rules and custom messages for validation, if user even provided email
            */
            $rules = [
                'email' => 'required|email'
            ];

            $customMessage = [
                'required' => 'Polje za :attribute je prazno!'
            ];

            $this->validate($request, $rules, $customMessage);

            //If email is already registerd, user gets response back that email is already in use
            if($this->checkIfEmailExists($email)){
                return "Email is already registerd";
            }
            else{

                $newuser = new User;

                $newuser->name = $name;
                $newuser->surname = $surname;
                $newuser->email = $email;
                $newuser->Telephone = $phone;
                $newuser->houseNumberAndStreet = $houseNumberAndStreet;
                $newuser->postcode = $postcode;
                $newuser->region = $region;

                $newuser->isGuest = 1;
                $newuser->isEmployee = 1;
                $newuser->isAuth = 1;
                $newuser->isNewCustomer = 0;

                if($newuser->save()){

                    $returnCredentials = ["Id"=>$newuser->user_id, "Name"=>$name, "Surname"=>$surname, "Email"=>$email, "Phone"=>$phone, "PostCode" => $postcode, "Region" => $region, "houseNumberAndStreet"=>$houseNumberAndStreet];
                    return response(['user'=>$returnCredentials, 'guest'=>true]);

                }
            }
        }
    }
    public function register(Request $request){
        $name = $request->input('name');
        $surname = $request->input('surname');
        $phone = $request->input('phone');
        $email = $request->input('email');
        $password = $request->input('password');


        if(!$this->checkIfEmailExists($email)){

            $newUser = new User;

            $newUser->Name = $name;
            $newUser->Surname = $surname;
            $newUser->email = $email;
            $newUser->password = Hash::make($password);
            $newUser->Telephone = $phone;
            $newUser->isAuth = 0;
            $newUser->isGuest = 0;
            $newUser->isNewCustomer = 0;
            $newUser->isEmployee = 0;

            if($newUser->save()){

                //TODO - send authentication message

                Mail::to($email)->send(new authenticateUserMail($email));


                $credentials = $request->validate([
                    'email' => 'required|email',
                    'password' => 'required'
                ]);

                if(Auth::attempt($credentials)){
                    $user = Auth::user();

                    $accessToken = $user->createToken('accessToken')->accessToken;


                    $returnCredentials = ["Name"=>$name, "Surname"=>$surname, "Email"=>$email, "Phone"=>$phone];
                    return response(['user'=>$returnCredentials, 'access_token'=> $accessToken, 'authentication' => true]);
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
