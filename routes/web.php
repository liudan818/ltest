<?php

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
    return view('welcome');
});

Route::get('/','static_pages_controller@home')->name('home');
Route::get('/help','static_pages_controller@help')->name('help');
Route::get('/about','static_pages_controller@about')->name('about');

Route::get('/signup','users_controller@signup')->name('signup');
