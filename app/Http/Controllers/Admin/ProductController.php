<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function getBrands(Request $request)
    {
        $categorySelected = Category::find($request->id);

        if ($categorySelected) {
            $response['brands'] = $categorySelected->brands()->orderByDesc('created_at')->get([
                'id',
                'description'
            ]);
            return response()->json($response);
        }

    }

    /**
     *  Carregamento por demanda
     * @return \Illuminate\Http\JsonResponse
     */
    public function dataLoad()
    {
//        try {
//            $admins = Admin::all()->map(fn($admin) => (object)[
//                'id' => $admin->id,
//                'name' => $admin->name,
//                'email' => $admin->email,
//                'active' => $admin->activeModeText()
//            ]);
//            return DataTables::of($admins)->addColumn(
//                'action',
//                fn($admins) => view('admin.admin.render-buttons', ['admin' => $admins])
//            )->make(true);
//        } catch (\Exception $e) {
//            return response()->json([
//                'error' => $e->getMessage()
//            ]);
//        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::orderByDesc('created_at')->get(['id', 'description']);
//        dd($categories);
        return view('admin.product.create', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Product $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
