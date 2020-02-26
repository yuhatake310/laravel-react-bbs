<?php

use Illuminate\Http\Request;

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

Route::resource('boards', 'BoardsController', ['except' => ['create', 'show', 'edit']]);
Route::resource('threads', 'ThreadsController', ['except' => ['index', 'create', 'edit']]);
Route::resource('message', 'MessagesController', ['only' => ['store', 'update', 'destroy']]);
Route::resource('user', 'UsersController', ['only' => ['show', 'update', 'destroy']]);
