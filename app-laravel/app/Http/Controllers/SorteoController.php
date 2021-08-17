<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SorteoController extends Controller
{
    public function index(){
        return view('sorteo', []);
    }

    public function admin(){
        return view('admin', []);
    }
}
