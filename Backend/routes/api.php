<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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

Route::middleware('auth:sanctum')->group(function(){
Route::middleware('isAdmin')->group(function(){
    ///// IS_ADMIN  
    Route::get('/auth/getuser', [AuthController::class,'getuser']);
});

Route::Post('/auth/logout', [AuthController::class, 'logout']);
Route::get('/auth/get', [AuthController::class, 'getFullName']);

});

Route::Post('/auth/login',[AuthController::class,'login']);
Route::Post('/auth/reg',[AuthController::class,'register']);