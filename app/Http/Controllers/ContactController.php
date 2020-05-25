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

        $validateData = $request->validate([
            'name' => 'string',
            'email' => 'email'
        ]);

        if($validateData){
            $contact = new Contacts;

            $contact->name = $name;
            $contact->email = $email;
            $contact->message = $message;

            $contact->save();
        }
    }
}
