<?php

use Illuminate\Http\Request;

Route::resource('message', 'MessagesController', ['only' => ['store', 'update', 'destroy']]);
Route::resource('user', 'UsersController', ['only' => ['index', 'update', 'destroy']]);
