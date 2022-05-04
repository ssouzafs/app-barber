<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CategoryController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\CustomerController;

Route::prefix('admin')->group(function () {
    Route::name('admin.')->group(callback: function () {

        // Mostrar página de login
        Route::get('/', [AuthController::class, 'showFormLogin'])->name('login');
        Route::post('/login', [AuthController::class, 'login'])->name('login.do');

        // Rotas Protegidas [ user admin ]
        Route::group(['middleware' => 'auth:admin'], function () {
            Route::get('/home', [AuthController::class, 'home'])->name('home');
            Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

            // Admin
            Route::get('/admins/data-load', [AdminController::class, 'dataLoad'])->name('admins.data.load');
            Route::resource('/admins', AdminController::class)->whereNumber('admin');

            // Marcas
            Route::get('/brands/data-load', [BrandController::class, 'dataLoad'])->name('brands.data.load');
            Route::resource('/brands', BrandController::class)->whereNumber('brand');

            // Categorias
            Route::get('/categories/data-load', [CategoryController::class, 'dataLoad'])->name('categories.data.load');
            Route::resource('/categories', CategoryController::class)->whereNumber('category');

            // Produtos
            Route::post('/products/get-brands', [ProductController::class, 'getBrands'])->name('products.get.brands');
            Route::get('/products/data-load', [ProductController::class, 'dataLoad'])->name('products.data.load');
            Route::resource('/products', ProductController::class)->whereNumber('product');

            // Clientes
            Route::resource('/customers', CustomerController::class)->whereNumber('customer');
        });
    });
});
