<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \Illuminate\Support\Facades\DB::table('admins')->insert([
            'name' => 'Sérgio Souza',
            'email' => 'admin@stockbarber.com.br',
            'password' => bcrypt('admin')
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        \Illuminate\Support\Facades\DB::delete('DELETE FROM admins WHERE email = ?', ['admin@stockbarber.com.br']);
    }
};
