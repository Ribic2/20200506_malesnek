<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->insert([
            [
                'itemName' => 'Voščilnica',
                'itemDescription' => 'Phasellus auctor mauris sit amet pharetra blandit. In rhoncus pulvinar mi, eget tincidunt massa pharetra non. Maecenas eu dapibus enim, vel hendrerit lacus. Donec venenatis fringilla leo, at hendrerit libero scelerisque vitae. In rhoncus ac risus sit amet tempor.',
                'itemPrice' => 1.50,
                'isOnSale' => false,
                'isEditable' => false,
                'availableQuantity' => 242,
                'isAvailable' => true,
                'categorie' => 'Voščilnica',
                'subCategorie' => 'Unikat',
                'colors' => 'Red',
                'itemImg'=> 'item1.png',
                'discountPrice' => 0,
                'dimensions' => '300x100',
                'OverAllrating' => 4.9,
                'discount' => 0
            ],
            [
                'itemName' => 'Voščilnica - Kitajski stil',
                'itemDescription' => 'Phasellus auctor mauris sit amet pharetra blandit. In rhoncus pulvinar mi, eget tincidunt massa pharetra non. Maecenas eu dapibus enim, vel hendrerit lacus. Donec venenatis fringilla leo, at hendrerit libero scelerisque vitae. In rhoncus ac risus sit amet tempor.',
                'itemPrice' => 3.50,
                'isOnSale' => true,
                'isEditable' => true,
                'availableQuantity' => 242,
                'isAvailable' => true,
                'categorie' => 'Voščilnica',
                'subCategorie' => 'Unikat',
                'colors' => 'Red',
                'discount' => 30,
                'itemImg'=> 'item1.png',
                'discountPrice' => 2.20,
                'dimensions' => '300x100',
                'OverAllrating' => 4.1
            ]
        ]);
    }
}
