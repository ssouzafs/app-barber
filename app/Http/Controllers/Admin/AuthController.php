<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Support\Utils\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Lançar fomulaŕio de login
     */
    public function showFormLogin()
    {
        if ($this->authenticateAdminIsValid()) {
            return redirect()->intended(route('admin.home'));
        }
        return view('admin.index');
    }

    /**
     * Logar
     */
    public function login(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
            'active' => true
        ];

        // Veriicando se todos os campos foram preenchidos
        if (in_array('', $credentials)) {
            return response()->json([
                'fail' => Message::error('Oops. Informe todos os campos para continuar !!!')
            ]);
        }

        // Validando email
        if (!filter_var($credentials['email'], FILTER_VALIDATE_EMAIL)) {
            return response()->json([
                'fail' => Message::error('Oops. O email informado não possui um formato válido !!!')
            ]);
        }

        // Verificando se Usuário será Autenticado
        if (Auth::guard('admin')->attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json([
                'redirect' => route('admin.home')
            ]);
        }

        // Usuário incorreto
        return response()->json([
            'fail' => Message::error('Oops. O email ou senha informados não conferem !!!')
        ]);
    }

    /**
     * Lançar tela inicial após o login
     */
    public function home()
    {
        return view('admin.home');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login');
    }
}
