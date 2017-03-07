<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\user;
use Auth;

class users_controller extends Controller
{
    //增加用户
    public function signup(){

        return view('users.create');
    }

    public function show($id){
        //echo "ID等于================".$id."</br>";
        $user = User::findOrFail($id);

        return view('users.show', compact('user'));

    }
    public function store(Request $request){

        $this->validate($request,['name'=>'required|max:50',
                                'email'=>'required|email|unique:users|max:255',
                                'password'=>'required|confirmed|min:6'
                                    ]);
        $user = User::create(['name'=> $request->name,
                                'email'=> $request->email,
                                'password'=> bcrypt($request->password),
                                ]);
        //$request->all();表示输入的所有数据
        Auth::login($user);
        session()->flash('success', '欢迎，您将在这里开启一段新的旅程~');
        return redirect()->route('users.show', [$user]);
    }

    public function destroy()
    {
        Auth::logout();
        session()->flash('success', '您已成功退出！');
        return redirect('login');
    }

}
