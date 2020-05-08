<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('item_review')->insert([
            [
                'Name' => 'Vid',
                'Surname' => 'Bukovec',
                'itemId' => 1,
                'comment' => 'Uredu izdelek dobre izdelave :).',
                'postTime' => '2020.08.05',
                'rating' => 5
            ],
            [
                'Name' => 'Vid',
                'Surname' => 'Bukovec',
                'itemId' => 1,
                'comment' => 'Zadovoljen z izdelkom.',
                'postTime' => '2020.01.05',
                'rating' => 4
            ]
        ]);
    }
}
