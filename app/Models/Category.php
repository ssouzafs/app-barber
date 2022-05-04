<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['description'];

    /**
     * Lista de marcas pertencentes a esta categoria
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function brands()
    {
        return $this->hasMany(Brand::class);
    }

    /**
     * @param $value
     * @return void
     */
    public function setDescriptionAttribute($value)
    {
        $this->attributes['description'] = mb_strtoupper($value);
    }

//    /**
//     *  Retornar usuário que criou o cadastro
//     * @return mixed
//     */
//    public function createdBy()
//    {
//        $admin = Admin::where('id', '=', $this->created_by)->first();
//        if ($admin) {
//            return "{} - {$admin->first}";
//        }
//    }

    /**
     * Retorna usuário da última atualização do registro
     * @return mixed
     */
    public function updatedBy()
    {
        return Admin::where('id', '=', $this->updated_by)->first();
    }
}
