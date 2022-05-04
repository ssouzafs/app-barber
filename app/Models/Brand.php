<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    protected $fillable = ['description', 'category_id'];

    /**
     * Categoria ao qual esta marca pertence
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * @param $value
     * @return void
     */
    public function setDescriptionAttribute($value)
    {
        $this->attributes['description'] = mb_strtoupper($value);
    }
//
//    /**
//     *  Retornar id e nome usuário que criou o cadastro, se existir
//     * @return mixed
//     */
//    public function createdBy()
//    {
//        $admin = Admin::where('id', '=', $this->created_by)->first();
//
//        if ($admin) {
//            return "#{$admin->id} - {$admin->firstName()}";
//        }
//        return "";
//    }
//
//    /**
//     * Retorna usuário da última atualização do registro
//     * @return mixed
//     */
//    public function updatedBy()
//    {
//        $admin = Admin::where('id', '=', $this->updated_by)->first();
//        if ($admin) {
//            return "#{$admin->id} - {$admin->firstName()}";
//        }
//    }
}
