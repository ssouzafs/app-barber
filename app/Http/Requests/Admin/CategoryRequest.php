<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::guard('admin')->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'description' => [
                'required',
                'min:3',
                'max:255',
                function ($attribute, $value, $fail) {
                    $query = DB::table('categories')->whereRaw(' LOWER("description") = ?', mb_strtolower($value));
                    if ($this->method() !== 'POST') {
                        $query->where('id', '!=', $this->category->id);
                    }
                    if ($query->first()) {
                        $fail('Já existe uma categoria com a descrição ' . $value . '.');
                    }
                }
            ]
        ];
    }
}
