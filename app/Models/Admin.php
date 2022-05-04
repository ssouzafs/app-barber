<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Admin extends Authenticatable
{

    use HasFactory;

    protected $guard = 'admin';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * @return bool
     */
    public function isActive()
    {
        return $this->attributes['active'] == true;
    }

    /**
     * @param $value
     * @return void
     */
    public function setPasswordAttribute($value)
    {
        if (!empty($value)) {
            $this->attributes['password'] = bcrypt($value);
        }
    }

    /**
     * @param $value
     * @return void
     */
    public function setActiveAttribute($value)
    {
        if (empty($value) || $value != true) {
            $this->attributes['active'] = false;
        } else {
            $this->attributes['active'] = true;
        }
    }

    /**
     * @return mixed
     */
    public function getNameAttribute(): mixed
    {
        return mb_convert_case($this->attributes['name'], MB_CASE_TITLE, "UTF-8");
    }

    /**
     * @return false|string
     */
    public function firstName()
    {
        return strtok(mb_convert_case($this->name, MB_CASE_TITLE, "UTF-8"), ' ');
    }

    /**
     *  Retornar string de acordo com valor booleano [Ativo se TRUE, Inativo se FALSE]
     * @return string
     */
    public function activeModeText(): string
    {
        if ($this->attributes['active']) {
            return 'Ativo';
        }
        return 'Inativo';
    }
}
