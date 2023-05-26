<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
   public function getAllBlog(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];

        
        $data = Blog::withTranslations($languageCode)->orderBy('order', 'asc')->get(); 
        if (!$data) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $data = $data->translate($languageCode);
        $data->map(function ($item) {
            if ($item->image) {
                $item->image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->image))
                );
            } else {
                $result = null;
                $item->image = $result;
                return $item->image;
            }
        });
        return response()->json($data);
    }
    public function getBlogId($slug,Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];
        $data = Blog::withTranslations($languageCode)->where('slug', $slug)->first();
         if (!$data) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $data = $data->translate($languageCode);
        $data->image = url(
                sprintf(
                    'storage/%s',
                    str_replace('\\', '/', $data->image)
                )
            );
        
        return response()->json($data);
    }
    
}