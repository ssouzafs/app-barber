<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreAdminRequest;
use App\Http\Requests\Admin\UpdateAdminRequest;
use App\Models\Admin;
use App\Support\Utils\Message;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Facades\DataTables;

class AdminController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.admin.index');
    }

    /**
     *  Carregamento por demanda
     * @return \Illuminate\Http\JsonResponse
     */
    public function dataLoad()
    {
        try {
            $admins = Admin::all()->map(fn($admin) => (object)[
                'id' => $admin->id,
                'name' => $admin->name,
                'email' => $admin->email,
                'active' => $admin->activeModeText()
            ]);
            return DataTables::of($admins)->addColumn(
                'action',
                fn($admins) => view('admin.admin.render-buttons', ['admin' => $admins])
            )->make(true);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.admin.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAdminRequest $request)
    {
        $admin = new Admin();
        $admin->fill($request->validated());
        $admin->created_by = Auth::guard('admin')->user()->id;
        $admin->updated_by = Auth::guard('admin')->user()->id;
        $admin->save();

        return response()->json([
            'success' => Message::success("Cadastro realizado com sucesso !!!")
        ]);
    }


    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $admin = Admin::findOrFail($id);
        return view('admin.admin.show', ['admin' => $admin]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $admin = Admin::findOrFail($id);
        return view('admin.admin.edit', ['admin' => $admin]);
    }

    /**
     * Update the specified resource in storage.
     * @param \App\Http\Requests\Admin\UpdateAdminRequest $request
     * @param Admin $admin
     * @return void
     */
    public function update(UpdateAdminRequest $request, Admin $admin)
    {
        $admin->fill($request->validated());
        $admin->active = $request->active;
        $admin->updated_by = Auth::guard('admin')->user()->id;
        $admin->save();
        return response()->json([
            'success' => Message::success('Atualização realizada com sucesso !')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $admin = admin::findOrFail($id);
        if (Auth::guard('admin')->user()->id === $admin->id) {
            return response()->json([
                'alert' => Message::info("Atenção! Você não pode deletar seu próprio usuário enquanto está logado!")
            ]);
        }

        if ($admin->delete()) {
            return response()->json([
                'success' => Message::success("Tudo Certo! O registro foi excluído com sucesso !!!")
            ]);
        }
    }
}
