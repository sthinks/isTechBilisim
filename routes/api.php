<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/contact', [
    \App\Http\Controllers\ContactController::class,
    'submit',
]);
Route::post('/franchise-contact', [
    \App\Http\Controllers\FranchiseController::class,
    'submit',
]);
// Route::get('/blog', [
//     \App\Http\Controllers\BlogController::class,
//     'getAllBlog',
// ]);
Route::middleware('lang')->get('/blog', [
    \App\Http\Controllers\BlogController::class,
    'getAllBlog',
]);
Route::get('/blog/{slug}', [
    \App\Http\Controllers\BlogController::class,
    'getBlogId',
]);
Route::get('/sales-points', [
    \App\Http\Controllers\SalesPointController::class,
    'getAllSalesPointer',
]);
Route::get('/product', [
    \App\Http\Controllers\ProductController::class,
    'getAllProduct',
]);
Route::get('/brand', [
    \App\Http\Controllers\BrandController::class,
    'getAllBrand',
]);
Route::get('/brand/{slug}', [
    \App\Http\Controllers\BrandController::class,
    'getBrandProduct',
]);
Route::get('/home-slider', [
    \App\Http\Controllers\HomeController::class,
    'getAllSlider',
]);
Route::get('/product-of-the-brand/{slug}', [
    \App\Http\Controllers\ProductController::class,
    'getByProduct',
]);
Route::get('/search/{slug}', [
    \App\Http\Controllers\HomeController::class,
    'getSearchDataElastic',
]);
Route::get('/product-detail/{slug}', [
    \App\Http\Controllers\ProductController::class,
    'getProductDetail',
]);
Route::get('/all-guide', [
    \App\Http\Controllers\HomeController::class,
    'getAllGuide',
]);
Route::post('/is-original', [
    \App\Http\Controllers\ProductController::class,
    'isItOrijinal',
]);
Route::post('/is-original-admin', [
    \App\Http\Controllers\ProductController::class,
    'isItOrijinalAdmin',
]);
Route::post('/is-original-deneme', [
    \App\Http\Controllers\ProductController::class,
    'isItOrijinalAdminv2',
]);
Route::get('/productListSeri', [
    \App\Http\Controllers\ProductController::class,
    'isItOrijinalList',
]);
Route::post('/login', [\App\Http\Controllers\AdminController::class, 'login']);
Route::post('/logout', [\App\Http\Controllers\AdminController::class, 'logout']);

Route::post('/import', [
    \App\Http\Controllers\ProductController::class,
    'import',
]);
Route::get('/export',[
    \App\Http\Controllers\ProductController::class,
    'export',
]);

Route::get('/get-pages/{slug}', [
    \App\Http\Controllers\HomeController::class,
    'getPages',
]);
Route::get('/get-header-blog', [
    \App\Http\Controllers\BlogController::class,
    'takeThreeBlog',
]);
Route::post('/denemelaa', [
    \App\Http\Controllers\ProductController::class,
    'adminQueryDownload',
]);

