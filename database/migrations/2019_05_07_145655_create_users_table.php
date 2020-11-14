<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('id');
            $table->timestamps();
            $table->string('Name');
            $table->string('Surname');
            $table->string('email');
            $table->string('remember_token')->nullable($value=true);
            $table->string('password')->nullable($value=true);
            $table->string('Telephone');
            $table->string('Country')->nullable($value=true);
            $table->string('Region')->nullable($value=true);
            $table->string('houseNumberAndStreet')->nullable($value=true);
            $table->integer('Postcode')->nullable($value=true);
            $table->boolean('isAuth');
            $table->boolean('isNewCustomer');
            $table->boolean('isGuest');
            $table->integer('overallSpending')->default(0);
            $table->integer('points')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
