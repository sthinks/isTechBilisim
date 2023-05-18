<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BrandController extends Controller
{
   public function getAllBrand()
    {
        $data = Brand::all();
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
        $data->map(function ($item) {
            if ($item->big_image) {
                $item->big_image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->big_image))
                );
            } else {
                $result = null;
                $item->big_image = $result;
                return $item->big_image;
            }
           
        });
         
        return response()->json($data);
    }
    public function getBrandProduct($slug)
    {
        $data = Brand::where('slug',$slug)->with('products')->get();
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
            $item->products->map(function ($product) {
                if ($product->product_image) {
                    $product->product_image = url(sprintf('storage/%s', str_replace('\\', '/', $product->product_image)));
                } else {
                    $result = null;
                    $product->product_image = $result;
                    return $product->product_image;
                }
                if ($product->product_detail_image) {
                    $product->product_detail_image = json_decode($product->product_detail_image);
                    $product->product_detail_image = array_map(function($filename) {
                        return url(sprintf('storage/%s', str_replace('\\', '/', $filename)));
                    }, $product->product_detail_image);
                } else {
                    $result = null;
                    $product->product_detail_image = $result;
                    return $product->product_detail_image;
                }
            });
        });
        
        return response()->json($data);
    }
}