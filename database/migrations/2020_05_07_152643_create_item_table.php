<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id('itemId');
            $table->string('itemName');
            $table->double('itemPrice', 100, 2);
            $table->string('itemImg')->nullable($value=true);
            $table->integer('discount')->nullable($value=true);
            $table->boolean('isOnSale')->nullable($value=true);
            $table->double('discountPrice', 100, 2)->nullable($value=true);
            $table->mediumText('itemDescription');
            $table->boolean('isEditable')->nullable($value=true);
            $table->integer('availableQuantity');
            $table->boolean('isAvailable')->nullable($value=true);
            $table->string('categorie');
            $table->string('subCategorie')->nullable($value=true);
            $table->enum('colors', ['Red', 'Blue', 'Purple']);
            $table->string('dimensions');
            $table->decimal('OverAllrating')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item');
    }
}
