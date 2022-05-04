<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'description',
        'code_sku',
        'purchase_price',
        'sale_price',
        'note'
    ];

    /**
     * @param $value
     * @return void
     */
    public function setDescriptionAttribute($value)
    {
        $this->attributes['description'] = mb_strtoupper($value);
    }

    /**
     * @param $value
     * @return void
     */
    public function setNoteAttribute($value)
    {
        $this->attributes['note'] = mb_strtoupper($value);
    }

    /**
     *  Retornar usuário que criou o cadastro
     * @return mixed
     */
    public function createdBy()
    {
        return Admin::where('id', '=', $this->created_by)->first();
    }

    /**
     * Retorna usuário da última atualização do registro
     * @return mixed
     */
    public function updatedBy()
    {
        return Admin::where('id', '=', $this->updated_by)->first();
    }
}
