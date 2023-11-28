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
    Route::get('books', 'App\Http\Controllers\Api\BookController@index');
    Route::prefix('reviews')->group(function() {
        Route::resource('reviews', 'App\Http\Controllers\Api\ReviewController');
        Route::get('/recent', 'App\Http\Controllers\Api\ReviewController@getRecentReviews');
    });
    // Route::resource('tags', 'App\Http\Controllers\Api\TagController');
    // Route::resource('review-tags', 'App\Http\Controllers\Api\ReviewTagController');
});

Route::get('/hello', function (Request $request) {
    return response()->json([
        'hello' => 'Hello World from Laravel!',
    ]);
});
