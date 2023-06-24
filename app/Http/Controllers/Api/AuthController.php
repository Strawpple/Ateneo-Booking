<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    
    public function login(LoginRequest $request){
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)){
            return response([
                'message' => 'Provided username or password is incorrect'
            ]);
        }
        /** @var User $user */
        $user = Auth::user();
        $token = $user -> createToken('main')->plainTextToken;
        return response(compact('user','token'));
    }

    public function logout(){
        /** @var User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}


// $data = $request->validated();

// /** @var \app\Models\User $user */

// $user = User::create([
//     'name' => $data['username'],
//     'password' => $data['password']
// ]);


// $token = $user->createToken('main')->plainTextToken;
// return response(compact('user','token'));