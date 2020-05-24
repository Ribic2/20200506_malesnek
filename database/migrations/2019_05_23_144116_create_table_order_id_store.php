<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableOrderIdStore extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orderIds', function (Blueprint $table) {
            $table->string('OrderId', 100)->primary();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('user_id')->on('users');
            $table->dateTime('ordered_time');
            $table->year('yearOfDelivery');
            $table->string('monthOfDelivery');
            $table->boolean('paymentStatus')->nullable($value=true);
            $table->enum('typeOfPayment', ['whenDeliverd', 'prepay'])->nullable($value=true);
            $table->boolean('deliveryStatus');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_order_id_store');
    }
}
