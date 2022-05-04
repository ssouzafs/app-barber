<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('persons', function (Blueprint $table) {
            $table->id();
            $table->string('cpfOrCnpj')->unique();
            $table->string('name');
            $table->boolean('isCostumer')->default(true);
            $table->integer('type_of_person')->default(1)->comment('1 = Natural Person, 2 = Legal Entity');
            $table->string('corporate_name')->nullable();
            $table->string('state_registration')->nullable();
            /** contact  */
            $table->string('email')->unique();
            $table->string('cell');
            $table->string('phone')->nullable();
            /** Address */
            $table->string('cep');
            $table->string('address');
            $table->string('neighborhood');
            $table->string('number');
            $table->string('complement')->nullable();
            $table->string('city');
            $table->string('uf');

            $table->boolean('active')->default(true);
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
        Schema::dropIfExists('persons');
    }
};
