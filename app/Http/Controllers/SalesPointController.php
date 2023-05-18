<?php

namespace App\Http\Controllers;

use App\Models\SalesPoint;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SalesPointController extends Controller
{
   public function getAllSalesPointer()
    {
        $data = SalesPoint::all();
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