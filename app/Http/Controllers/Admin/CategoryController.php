<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CategoryRequest;
use App\Models\Category;
use App\Support\Utils\Message;
use Yajra\DataTables\Facades\DataTables;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.category.index');
    }

    /**
     *  Carregamento por demanda
     * @return \Illuminate\Http\JsonResponse
     */
    public function dataLoad()
    {
        try {
            $categories = Category::all()->map(fn($category) => (object)[
                'id' => $category->id,
                'description' => $category->description,
                'created_at' => $category->created_at->format('d/m/Y H:i'),
                'updated_at' => $category->updated_at->format('d/m/Y H:i'),
            ]);
            return DataTables::of($categories)->addColumn(
                'action',
                fn($categories) => view('admin.category.render-buttons', ['category' => $categories])
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
        return view('admin.category.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        $category = new Category();
        $category->fill($request->validated());
        $category->created_by = \Auth::guard('admin')->user()->id;
        $category->save();

        return response()->json([
            'success' => Message::success("Cadastro realizado com sucesso !")
        ]);
    }

    public function test($obj)
    {
        return $obj->id;
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = Category::find($id);
        return view('admin.category.show', ['category' => $category]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::find($id);
        return view('admin.category.edit', ['category' => $category]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, Category $category)
    {
        $category->fill($request->validated());
        $category->updated_by = \Auth::guard('admin')->user()->id;
        $category->save();
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
        $category = Category::find($id);
        if ($category->delete()) {
            return response()->json([
                'success' => Message::success("Tudo Certo! O registro foi excluído com sucesso !")
            ]);
        }
        return response()->json([
            'error' => Message::error("Oops! Nenhum registro foi encontrado para o ID {$id} !")
        ]);
    }
}
