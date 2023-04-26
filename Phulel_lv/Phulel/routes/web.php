<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});

route::get('/redirect',[HomeController::class,'redirect']);
route::get('/',[HomeController::class,'index']);
route::get('/cascade',[HomeController::class,'cascade']);
route::get('/wedding',[HomeController::class,'wedding']);
route::get('/other',[HomeController::class,'other']);
route::get('/showcart',[HomeController::class,'cart']);

route::get('/delete/{id}',[HomeController::class,'deletefromcart']);

route::get('/confirm',[HomeController::class,'confirmcart']);

route::get('/profile',[HomeController::class,'profile']);


route::post('/addcart/{id}',[HomeController::class,'addcart']);
route::post('/update/{id}',[HomeController::class,'updatecart']);
route::post('/updateprofilename/{id}',[HomeController::class,'updateprofilename']);