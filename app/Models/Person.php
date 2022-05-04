<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $fillable = [
        'cpfOrCnpj',
        'name',
        'type_of_person',
        'corporate_name',
        'state_registration',
        'email',
        'cell',
        'phone',
        'cep',
        'address',
        'neighborhood',
        'complement',
        'number',
        'city',
        'state',
        'active'
    ];
}
