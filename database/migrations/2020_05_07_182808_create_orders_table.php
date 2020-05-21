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
            $table->foreignId('userId')->references('user_id')->on('users');
            $table->foreignId('itemId')->references('itemId')->on('items');
            $table->string('orderId');
            $table->integer('Quantity');
            $table->boolean('paymentStatus')->nullable($value=true);
            $table->enum('typeOfPayment', ['whenDeliverd', 'prepay'])->nullable($value=true);
            $table->boolean('deliveryStatus')->nullable($value=true);
            $table->year('yearOfDelivery')->nullable($value=true);
            $table->string('monthOfDelivery')->nullable($value=true);

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
