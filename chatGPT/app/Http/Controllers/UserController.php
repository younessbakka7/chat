<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    // use ApiResponser;

    public function register(Request $request)
    {
        // create new user
        $formFields = $request->validate([
            'firstName' => ['required','min:2'],
            'lastName' => ['required'],
            'email' => ['required','email',Rule::unique('users','email')],
            'password' => 'required|confirmed|min:6'
        ]);

        //hash password
        $formFields['password'] = bcrypt($formFields['password']);
        // create user
        $user = User::create($formFields);
        //login
        return response()->json(["user" => $user, "token" => $user->createToken("Api Token of ".$user->fname)->plainTextToken,"message" =>"user created and in"],200);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required','email'],
            'password' => 'required'
        ]);
        if(!auth()->attempt($credentials)) {
            return response()->json("invalid credentials",401);
        }
        $user = User::where('email',$request->email)->first();

        return response()->json(["user" => $user, "token" => $user->createToken("Api Token of ".$user->fname)->plainTextToken,"message" =>"user in"],200);
        }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json("user logged out successfully",200);
    }

    public function getUser(Request $request) {
        $user = User::where("id",auth()->id())->with('roles')->get();
        
        return response()->json($user,200);
    }
}

