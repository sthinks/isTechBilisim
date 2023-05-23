<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class LanguageMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Dil ayarlarını burada kontrol edin ve gerekli işlemleri yapın
       
        $request->api_pref_lang = $request->server('HTTP_ACCEPT_LANGUAGE');
        return $next($request);
       
    }
}