<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateAdminRequest extends FormRequest
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
            'name' => ['required', 'min:3', 'max:255'],
            'email' => [
                'required',
                'email',
                'unique:admins,email,' . $this->admin->id
            ],
            'password' => empty($this->password) && empty($this->password_confirmation) ? 'nullable' : 'required|min:4|max:255|same:password_confirmation',
            'password_confirmation' => empty($this->password_confirmation) && empty($this->password) ? 'nullable' : 'required|min:4|max:255|same:password',
        ];
    }
}
