<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductList;
use App\Models\SeriForm;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Exports\ProductExport;
use App\Imports\ProductListImport;
use App\Exports\SeriFormExport;
use App\Imports\SeriFormImport;
use App\Imports\ProductImport;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\LargeDataExport;
use \Firebase\JWT\JWT;

class ProductController extends Controller
{
   public function getAllProduct(Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];

        $data = Product::withTranslations($languageCode)->all();
        if (!$data) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $data = $data->translate($languageCode);
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
    public function getByProduct($slug,Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];

        $brand = Brand::where('slug',$slug)->firstOrFail();
        $brand_name = $brand->brand_name;

        $data = Product::withTranslations($languageCode)->where('brand_name',$brand_name)->get();
        if (!$data) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $data = $data->translate($languageCode);
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
    public function getProductDetail($slug,Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $languageCode = explode(',', $acceptLanguage)[0];
        $languageCode = explode('-', $languageCode)[0];

        $data = Product::withTranslations($languageCode)->where('slug',$slug)->get();
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

    public function isItOrijinal(Request $request)
    {
        $keyword = $request->input('serial_no');
        $results = SeriForm::search($keyword)->get()->first();
      
        if ($results == null) {
            return response()->json(['data' => null, 'response' => 400, 'message' => 'The product is not original']);
        } else {
            return response()->json(['data' => $results['urun_adi'], 'response' => 200, 'message' => 'Product original']);
        }
    }
    public function isItOrijinalAdmin(Request $request)
    {
        $token = $request->header('Authorization');
        
        if ($token) {
                $keyword = $request->input('serial_no');
                if(str_contains($keyword, '.'))
                {   
                    $keyword = str_replace('.', '/', $keyword);
                };

                $results = SeriForm::search($keyword)->get()->first();
                if ($results == null) {
                    return response()->json(['data' => null, 'response' => 400, 'message' => 'The product is not original']);
                } else {
                    return response()->json(['data' => $results, 'response' => 200, 'message' => 'Product original']);
                }
        }
    }
    public function isItOrijinalList(Request $request)
    {
        $data = SeriForm::orderBy('id', 'desc')->paginate(100);
        return response()->json($data);
    }
    public function export() 
    { 
       return Excel::store(new LargeDataExport, 'large_data.xlsx', 'local', \Maatwebsite\Excel\Excel::XLSX, [
            'chunk_size' => 10000,
        ]);  
    }
    public function import(Request $request) 
    {
        $token = $request->header('Authorization');
        if($token)
        {
            $data = Excel::import(new SeriFormImport, $request->file('file'));
            return response()->json(['response' => 200,'data' => $data, 'message' => 'Kayıt başarılı']);
        }

        return response()->json("Yetkiniz yok.");
    }

}
