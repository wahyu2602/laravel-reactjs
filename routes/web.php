<?php

use App\Http\Controllers\PostController;
use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// route yang bisa diakses untuk semua user yang belum ataupun sudah login
Route::get('/', function () {
    // $posts = Post::all();
    // foreach ($posts as $post) {
    //     $postdata = $post->user->name;
    // };
    // return $postdata;
    return Inertia::render('Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'artikels' => Post::all()
    ]);
})->name('home');

Route::get('/artikel/read/{post:id}', [PostController::class, 'show']);

// route group yang hanya bisa diakses setelah user login
Route::middleware(['auth', 'verified'])->group(function () {

    // route group berdasarkan controller
    Route::controller(PostController::class)->group(function () {
        Route::get('/dashboard', 'index')->name('dashboard');
        Route::get('/artikel', 'create')->name('artikel');
        Route::get('/artikel/{post:id}/update', 'edit');
        Route::post('/artikel/{post:id}/update', 'update')->name('artikel.update');
        Route::post('/artikel', 'store')->name('artikel');
        Route::get('/artikel/{post:id}/delete', [PostController::class, 'destroy']);
    });
});

// pemanggilan route lainnya yang ada di folder yang sama di file auth.php
require __DIR__ . '/auth.php';
