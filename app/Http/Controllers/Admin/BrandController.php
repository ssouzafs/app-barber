<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BrandRequest;
use App\Models\Brand;
use App\Models\Category;
use App\Support\Utils\Message;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Facades\DataTables;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.brand.index');
    }

    /**
     *  Carregamento por demanda
     * @return \Illuminate\Http\JsonResponse
     */
    public function dataLoad()
    {
        try {
            $brands = Brand::all()->map(fn($brand) => (object)[
                'id' => $brand->id,
                'description' => $brand->description,
                'created_at' => $brand->created_at->format('d/m/Y H:i'),
                'updated_at' => $brand->updated_at->format('d/m/Y H:i')
            ]);
            return DataTables::of($brands)->addColumn(
                'action',
                fn($brands) => view('admin.brand.render-buttons', ['brand' => $brands])
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
        return view('admin.brand.create', [
            'categories' => Category::orderByDesc('created_at')->get(['id', 'description'])
        ]);
    }

    /**
     * @param BrandRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(BrandRequest $request)
    {
        $brand = new Brand();
        $brand->fill($request->validated());
        $brand->created_by = Auth::guard('admin')->user()->id;
        $brand->save();

        return response()->json([
            'success' => Message::success("Cadastro realizado com sucesso !")
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $brand = Brand::find($id);
        return view('admin.brand.show', ['brand' => $brand]);


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $brand = Brand::find($id);
        return view('admin.brand.edit', [
            'brand' => $brand,
            'categories' => Category::orderByDesc('created_at')->get(['id', 'description'])
        ]);
    }

    /**
     * @param \App\Http\Requests\Admin\BrandRequest $request
     * @param Brand $brand
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(BrandRequest $request, Brand $brand)
    {
        $brand->fill($request->validated());
        $brand->updated_by = Auth::guard('admin')->user()->id;
        $brand->save();
        return response()->json([
            'success' => Message::success("Atualização realizada com sucesso !")
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
        $brand = Brand::findOrFail($id);
        if ($brand->delete()) {
            return response()->json([
                'success' => Message::success("Tudo Certo! O registro foi excluído com sucesso !")
            ]);
        }
    }
}
