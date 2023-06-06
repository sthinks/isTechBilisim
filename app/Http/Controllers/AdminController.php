<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Carbon\Carbon;
class AdminController extends Controller
{
    public function login(Request $request)
    {
       
         $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            // İsteğin doğrulaması başarısız olduğunda hata mesajlarını döndürürüz
            return response()->json(['error' => $validator->errors()], 401);
        }
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            // Kullanıcının oturumunu başlat
            $user = Auth::user();
            
            $expirationTime = Carbon::now()->addMinutes(1000)->timestamp;
            $token = JWTAuth::fromUser($user, [
                'exp' => $expirationTime,
                'email' => $user->email
            ]);
            
                // JWT token'ını çereze ekleyerek HTTP yanıtı oluştur
            $response = response()->json(['response' => 200,'token' => $token, 'message' => 'Giriş işlemi başarılı.']);

                            
            return $response;
        }
        
        return  response()->json(['response' => 400, 'message' => 'Kullanıcı adı veya şifresi yanlış.']);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return response()->json(['response' => 200, 'message' => 'Çıkış işlemi başarılı.']);
    }
}