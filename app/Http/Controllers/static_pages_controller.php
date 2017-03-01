<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class static_pages_controller extends Controller
{
    //
    public function home(){

            return view('static_pages/home');

    }
    public function help(){

            return view('static_pages/help');

    }
    public function about(){

            return view('static_pages/about');

    }

}
