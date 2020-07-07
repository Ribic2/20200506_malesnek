<?php

namespace App\Http\Controllers;

use App\Http\Resources\usersResource;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{


    /**
     * Function that check if user is authenticated
     */
    function getUserData(){
        if(Auth::check()){
            $user = Auth::user();
            $returnCredentials = [
            "id"=>$user->user_id,
            "Name"=>$user->Name,
            "Surname"=> $user->Surname,
            "Email"=>$user->email,
            "Phone"=>$user->Telephone,
            "isAuth"=>$user->isAuth,
            "isEmployee"=>$user->isEmployee,
            "isNewCustomer" => $user->isNewCustomer,

            //Place
            "houseNumberAndStreet" => $user->houseNumberAndStreet,
            "Postcode"=> $user->Postcode,
            "Region" => $user->Region
            ];
            return response(['user'=>$returnCredentials]);
        }
        return response()->json("user is not logged", 200);
    }

    /**
    * Changes users basic data
    */
    public function changeUserBasics(Request $request){
        $name = $request->input('name');
        $surname = $request->input('surname');
        $phone = $request->input('phone');
        $userId = $request->input('userId');

        $changeBasic = User::find($userId);

        $changeBasic->Name = $name;
        $changeBasic->Surname = $surname;
        $changeBasic->Telephone = $phone;

        $rules = [
            'name' => 'required',
            'surname' => 'required',
            'phone' => 'required'
        ];

        $customMessage = [
            'required' => 'Mankajoči podatki!'
        ];

        $this->validate($request, $rules, $customMessage);

        if($changeBasic->save()){
            return response("Ok", 200);
        }
    }

    public function changeResidenceInfo(Request $request){
        $postcode = $request->input('postcode');
        $houseNumberAndStreet = $request->input('houseNumberAndStreet');
        $region = $request->input('region');
        $userId = $request->input('userId');


        $rules = [
            'postcode' => 'required',
            'houseNumberAndStreet' => 'required',
            'region' => 'required'
        ];

        $customMessage = [
            'required' => 'Mankajoči podatki!'
        ];

        $this->validate($request, $rules, $customMessage);

        $changeBasic = User::find($userId);

        $changeBasic->houseNumberAndStreet = $houseNumberAndStreet;
        $changeBasic->Postcode = $postcode;
        $changeBasic->Region = $region;

        if($changeBasic->save()){
            return response("Ok", 200);
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

    public function confirmMail(Request $request){
        $email = $request->input('email');

        $checkIfAlreadyAuth = User::select('isAuth')->where('email', $email)->get();
        $checkIfEmailExits = User::where('email', $email)->count();

        if($checkIfEmailExits == 0){
            return response("E-naslov ne obstaja!", 403)->header('Content-Type', 'text/plain');
        }
        else{
            if($checkIfAlreadyAuth[0]->isAuth != "0"){
                return response("Račun je bil že potrjen!", 403)->header('Content-Type', 'text/plain');
            }
            else{
                User::where('email', $email)
                ->update(['isAuth'=> 1]);

                return response(1, 200)->header('Content-Type', 'text/plain');
            }
        }
    }
    public function getAllUsers(){
        if(Auth::check() && Auth::user()->isEmployee == 1){
            $returnCredentials = User::all()->where('isGuest', 0);

            return $returnCredentials;

        }
        return 0;
    }

    public function deleteUser(Request $request){

        $id = $request->input('id');

        User::where('user_id', $id)->delete();

        return 1;
    }

    public function changeAdmin(Request $request){

        $id = $request->input('id');

        $checkIfAdmin = User::select('isEmployee')->where('user_id', $id)->get();

        if($checkIfAdmin[0]->isEmployee == 1){
            User::where('user_id', $id)->update(['isEmployee' => 0]);
        }
        else{
            User::where('user_id', $id)->update(['isEmployee' => 1]);
        }
    }


}
