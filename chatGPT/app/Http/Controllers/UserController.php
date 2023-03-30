<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
// use App\Traits\ApiResponser;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    // use ApiResponser;

    public function register(Request $request)
    {
        $attr = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed'
        ]);

        $user = User::create([
            'name' => $attr['name'],
            'password' => bcrypt($attr['password']),
            'email' => $attr['email']
        ]);

        return response()->json(['user'=>$user,'access_token' => $user->createToken('API Token')->plainTextToken],200);
    }

    public function login(Request $request)
    {
        $cred = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string|min:8'
        ]);

        if (!Auth::attempt($cred)) {
            return $this->error('Credentials not match', 401);
        }

        $user = User::where('email',$cred['email'])->first();

        return response()->json(['user'=>$user,'access_token' => auth()->user()->createToken('API Token')->plainTextToken],200);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Tokens Revoked'
        ];
    }
}

