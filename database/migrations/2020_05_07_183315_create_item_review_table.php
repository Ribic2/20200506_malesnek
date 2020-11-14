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
        Schema::create('itemReviews', function (Blueprint $table) {
            $table->id('id');
            $table->foreignId('itemsId')->references('id')->on('items')->onDelete('cascade');
            $table->string('Name');
            $table->string('Email');
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
