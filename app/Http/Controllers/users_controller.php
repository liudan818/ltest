<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class users_controller extends Controller
{
    //增加用户
    public function signup(){

        return view('users/create');
    }

}
