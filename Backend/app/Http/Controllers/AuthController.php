<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;


class AuthController extends Controller
{
    public function login(Request $request){
      

        $request->validate([
            "password"=> "required|min:8",
            "login" => "required",

        ]);
        $LoginType = filter_var($request->login, FILTER_VALIDATE_EMAIL)? 'email':'username';
        $user = User::where($LoginType, $request->login)->first();
        if(!$user && $LoginType == 'email'){
            throw ValidationException::withMessages(["Email" => "Email Incorrect"]);
        }else if(!$user && $LoginType == 'username'){
           throw ValidationException::withMessages(["Username" => "Username Incorrect"]);
        }else if(!Hash::check($request->password, $user->password)){
            throw ValidationException::withMessages(["password"=> "password in correct"]);
        }
       
        return $user->createToken("username")->plainTextToken;
    }

    public function getFullName(Request $request){
        $user = $request->user();
        $fullname = $user->first_name . ' ' . $user->last_name;
        return response()->json(["fullName" => $fullname, "IsAdmin" => $user->is_admin],200);
    }   
    public function register(Request $request){
        $request->validate([
            'username' => 'required|unique:users,username',
            'password'=> 'required|min:8',
            'email'=> 'required|unique:users,email',
            'first_name' => 'required',
            
        ],[
            'username.unique'=> 'Username Sudah Terpakai',
            'email'=> 'Email Sudah Terpakai',
            'password.min:8' => 'password minimal 8 karakter'
        ]);
        $request['password'] = Hash::make($request->password);
        $user=User::create($request->all());
        return response()->json(["Register Success"],200);
    }


    public function getUser(){
        
        $user = User::all();
        return response()->json(["users" => $user],200);
    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json(["Logout Success"],200);
    }



}
