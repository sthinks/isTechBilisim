<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
   public function getAllProduct()
    {
        $data = Product::all();
         $data->map(function ($item) {
            if ($item->product_image) {
                $item->product_image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->product_image))
                );
            } else {
                $result = null;
                $item->product_image = $result;
                return $item->product_image;
            }

            //Product image gallery
            if ($item->product_detail_image) {
                $item->product_detail_image = json_decode($item->product_detail_image);
                $item->product_detail_image = array_map(function($filename) {
                    return url(sprintf('storage/%s', str_replace('\\', '/', $filename)));
                }, $item->product_detail_image);
            } else {
                $item->product_detail_image = [];
            }
        
        });
        
        return response()->json($data);
    }
    public function getByProduct($slug)
    {
        $brand = Brand::where('slug',$slug)->firstOrFail();
        $brand_name = $brand->brand_name;

        $data = Product::where('brand_name',$brand_name)->get();
        $data->map(function ($item) {
            if ($item->product_image) {
                $item->product_image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->product_image))
                );
            } else {
                $result = null;
                $item->product_image = $result;
                return $item->product_image;
            }

            //Product image gallery
            if ($item->product_detail_image) {
                $item->product_detail_image = json_decode($item->product_detail_image);
                $item->product_detail_image = array_map(function($filename) {
                    return url(sprintf('storage/%s', str_replace('\\', '/', $filename)));
                }, $item->product_detail_image);
            } else {
                $item->product_detail_image = [];
            }
        
        });
        return response()->json($data);
    }
    
}