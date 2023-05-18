<?php

namespace App\Http\Controllers;

use App\Models\HomeSlider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
   
}