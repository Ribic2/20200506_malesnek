<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([

            [
                'Name' => 'Vid',
                'Surname' => 'Bukovec',
                'Email' => 'vid.bukovec8361@gmail.com',
                'Password' => hash::make('test123'),
                'Telephone' => '040831124',
                'Country' => 'Slovenija',
                'Region' => 'Dolenjska',
                'houseNumberAndStreet' => 'Dvor 107',
                'PostCode' => '8361',
                'isAuth' => true,
                'isNewCustomer' => true,
                'isEmployee' => false,
                'overallSpending' => 0,
                'points' => 0
            ],
            [
                'Name' => 'Maks',
                'Surname' => 'Malenšek',
                'Email' => 'maks.malensek@gmail.com',
                'Password' => hash::make('belilo123'),
                'Telephone' => '040212999',
                'Country' => 'Slovenija',
                'Region' => 'Dolenjska',
                'houseNumberAndStreet' => 'Dolenjske toplice 10a',
                'PostCode' => '8350',
                'isAuth' => true,
                'isNewCustomer' => false,
                'isEmployee' => true,
                'overallSpending' => 0,
                'points' => 0
            ]
        ]);
    }
}
