<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemReviewTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_review', function (Blueprint $table) {
            $table->id('itemReviewId');
            $table->foreignId('itemId')->references('itemId')->on('items');
            $table->string('Name');
            $table->string('Surname');
            $table->string('comment');
            $table->date('postTime');
            $table->integer('rating');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_review');
    }
}
