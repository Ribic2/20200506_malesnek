<?php

namespace App\Http\Controllers;

use App\Contacts;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function getContact(Request $request){

        $email = $request->input('email');
        $name = $request->input('name');
        $message = $request->input('message');

        if($email == null && $name == null && $message == null){
            return "Ni bilo podanih podatkov";
        }

        $rules = [
            'name' => 'string',
            'email' => 'email'
        ];

        $customMessage = [
            "email" => "Napačno vnesen e-naslov!"
        ];

        if($this->validate($request, $rules, $customMessage)){
            $contact = new Contacts;

            $contact->name = $name;
            $contact->email = $email;
            $contact->message = $message;

            $contact->save();

            return response("1", 200);
        }
    }
}
