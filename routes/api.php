<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware'=> 'api'], function(){
    Route::prefix('books')->group(function() {
        Route::resource('/', 'App\Http\Controllers\Api\BookController');
        Route::get('/{book}/reviews', 'App\Http\Controllers\Api\BookController@getReviews');
    });

    Route::prefix('reviews')->group(function() {
        Route::resource('reviews', 'App\Http\Controllers\Api\ReviewController');
        Route::get('/popular', 'App\Http\Controllers\Api\ReviewController@getPopularBooks');
        Route::get('/recent', 'App\Http\Controllers\Api\ReviewController@getRecentReviews');
    });
});

Route::get('/hello', function (Request $request) {
    return response()->json([
        'hello' => 'Hello World from Laravel!',
    ]);
});
