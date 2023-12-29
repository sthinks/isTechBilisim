<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Queue;
use App\Models\Product;
use App\Jobs\ExportToExcel;
use App\Models\ProductList;
use App\Models\SeriForm;
use App\Models\Brand;
use Illuminate\Support\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Exports\SeriFormExport;
use App\Imports\SeriFormImport;
use Maatwebsite\Excel\Facades\Excel;
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
    public function isItOrijinalAdminv2(Request $request)
    {
        $token = $request->header('Authorization');
        
        if ($token) {
               $searchData = $request->input('search_value');
                if($searchData['slug'] == 'all')
                {
                    $results = SeriForm::search($searchData['value'])->paginate(50);

                }
                else
                {
                    if(str_contains($searchData['value'], '.'))
                    {   
                        $searchData['value'] = str_replace('.', '/', $searchData['value']);
                    };
                    $results = SeriForm::where($searchData['slug'], 'LIKE', '%' . $searchData['value'] . '%')->paginate(50);
                }
                    
                   
              
                    
                return response()->json($results);
        }
    }
    public function export(Request $request) 
    {   
        $start = $request->query('start');
        $end = $request->query('end');
        
        return Excel::download(new SeriFormExport($start,$end), 'seriform.xlsx');
    }
    public function adminQueryDownload(Request $request)
    {
        $searchData = $request->input('search_value');
        $searchDataCollection = collect($searchData);

        $excelFilePath = array();
        try {
            if($searchData['slug'] == 'all')
            {
                $data = SeriForm::search($searchData['value'])->get()->toArray();
                $chunkSize = 500000;
                $dataCount = count($data);
                for ($i = 0; $i < ceil($dataCount / $chunkSize); $i++) {
                    $randomFileName = 'seriform_' . ($i + 1) . '.csv';
                    $handle = fopen(storage_path('app/public/' . $randomFileName), 'w');
                    $start = $i * $chunkSize;
                    $end = min(($i + 1) * $chunkSize, $dataCount);
                    $results = array_slice($data, $start, $end - $start);
                    foreach ($results as $value) {
                        fputcsv($handle, $value);
                    }

                    fclose($handle);
                    array_push($excelFilePath, "/storage/{$randomFileName}");
                }            
            }else{
                $query = SeriForm::where($searchDataCollection['slug'], 'LIKE', '%' . $searchDataCollection['value'] . '%');
                $chunkSize = 500000;
                $dataCount = $query->count();
                for ($i = 0; $i < ceil($dataCount / $chunkSize); $i++) { 
                    $randomFileName = 'seriform_' . ($i + 1) . '.csv';
                    $handle = fopen(storage_path('app/public/' . $randomFileName), 'w');
                    
                    $query
                        ->lazyById(10000, 'id')
                        ->skip($i * $chunkSize)
                        ->take($chunkSize)
                        ->each(function ($product) use ($handle) {
                            fputcsv($handle, $product->toArray());
                        });

                    fclose($handle);
                    array_push($excelFilePath, "/storage/{$randomFileName}");  
                }
            }
            $response = response()->json(['response' => 200,'path' => $excelFilePath , 'message' => 'success']);
            return $response;
           
        } catch (\Exception  $e) {
            $response = response()->json([
                'response' => 400,
                'path' => "null",
                'message' => "Error: {$e->getMessage()}"
            ]);
            return $response;

        }
       
         
    }
    public function convertToCsvExcel()
    {

    }
    
}
