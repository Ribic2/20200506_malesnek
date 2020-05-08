<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id('idOrders');
            $table->foreignId('userId')->references('userId')->on('users');
            $table->foreignId('itemId')->references('itemId')->on('items');
            $table->string('orderId');
            $table->integer('Quantity');
            $table->boolean('paymentStatus');
            $table->enum('typeOfPayment', ['whenDeliverd', 'prepay']);
            $table->boolean('deliveryStatus');
            $table->year('yearOfDelivery');
            $table->string('monthOfDelivery');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}