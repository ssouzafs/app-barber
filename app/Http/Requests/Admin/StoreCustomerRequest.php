<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StoreCustomerRequest extends FormRequest
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
     * @param $keys
     * @return array|void
     */
    public function all($keys = null)
    {
        return $this->resolveFields(parent::all());
    }

    /**
     * Funcão limpa os campos com caracteres indesejados e os retorna para o fluxo de validação.
     * @param array $fields
     * @return array
     */
    public function resolveFields(array $fields)
    {
        $fields['cpfOrCnpj'] = get_clear_fields($this->request->all()['cpfOrCnpj']);
        return $fields;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'type_of_person' => [
                'required',
                Rule::in(['1', '2'])
            ],

            'name' => [
                'required',
                'min:3',
                'max:255',
            ],

            'state_registration' => [
                'required',
                'max:255',
            ],

            'cpfOrCnpj' => [
                'required',
                'cpf_ou_cnpj',
            ],
//
            'email' => [
                'required',
                'email'
            ],
//
            'cell' => [
                'required'
            ],

            'zipcode' => [
                'required'
            ],

            'city' => [
                'required'
            ],

            'uf' => [
                'required'
            ],

            'address' => [
                'required'
            ],

            'neighborhood' => [
                'required'
            ],

            'number' => [
                'required'
            ],


        ];
    }
}
