<?php

namespace App\Http\Controllers;

use App\Models\HomeSlider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Blog;
class HomeController extends Controller
{
   public function getAllSlider()
    {
        $data = HomeSlider::all();
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
    public function getSearchDataElastic($query,Request $request)
    {
       
        $acceptLanguage = $request->header('Accept-Language');
        $searchTerm = htmlentities($query);
        $data = Blog::search($query)->get();
        $translatedData = $data->translate($acceptLanguage);
        
        return response()->json($translatedData);
    }
   
}