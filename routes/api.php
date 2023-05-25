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
    \App\Http\Controllers\BlogController::class,
    'getSearchDataElastic',
]);
Route::get('/product-detail/{slug}', [
    \App\Http\Controllers\ProductController::class,
    'getProductDetail',
]);
