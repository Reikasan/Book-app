<?php

// use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('welcome-page', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::prefix('/guest')->group(function () {
    Route::get('/', function() {
        return Inertia::render('index-page');
    });
    Route::get('/recent-added', function() {
        return Inertia::render('recent-page');
    });
    Route::get('/popular', function() {
        return Inertia::render('popular-page');
    });
});



Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return Inertia::render('index-page');
    })->name('index-page');
});

// require __DIR__.'/auth.php';
