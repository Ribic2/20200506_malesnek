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
            $table->id('userId');
            $table->timestamps();
            $table->string('Name');
            $table->string('Surname');
            $table->string('Email');
            $table->string('Password');
            $table->string('Telephone');
            $table->string('Country');
            $table->string('Region');
            $table->string('houseNumberAndStreet')->nullable($value=true);
            $table->integer('Postcode');
            $table->boolean('isAuth')->nullable($value=true);
            $table->boolean('isNewCustomer');
            $table->boolean('isEmployee');
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
