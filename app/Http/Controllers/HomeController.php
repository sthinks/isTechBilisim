<?php

namespace App\Http\Controllers;

use App\Models\HomeSlider;
use App\Models\Guide;
use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Blog;
use Illuminate\Support\Str;
use App\Models\Record;
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
    public function getSearchDataElastic($query, Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $searchTerm = Str::slug($query, ''); // Türkçe karakterleri İngilizce karakterlere dönüştürme.
        
        $data = Blog::search($searchTerm)->get();
        $translatedData = $data->translate($acceptLanguage);

        return response()->json($translatedData);
    }
    public function getAllGuide()
    {
    $guides = Guide::with('pdfGuide')->get();

    $data = [];

    foreach ($guides as $guide) {
        $pdfGuides = [];

        foreach ($guide->pdfGuide as $pdfGuide) {
            $pdf = json_decode($pdfGuide->pdf, true)[0];
            $downloadLink = asset( sprintf('storage/%s', str_replace('\\', '/', $pdf['download_link'])));
            $originalName = $pdf['original_name'];

            $pdfGuides[] = [
                'id' => $pdfGuide->id,
                'name' => $pdfGuide->name,
                'download_link' => $downloadLink,
                'original_name' => $originalName,
                'created_at' => $pdfGuide->created_at,
                'updated_at' => $pdfGuide->updated_at,
                'title' => $pdfGuide->title,
                'guide_id' => $pdfGuide->guide_id,
            ];
        }

        $data[] = [
            'id' => $guide->id,
            'name' => $guide->name,
            'slug' => $guide->slug,
            'created_at' => $guide->created_at,
            'updated_at' => $guide->updated_at,
            'pdf_guide' => $pdfGuides,
        ];
    }

    return response()->json($data);
}
    public function getPages($slug, Request $request)
    {
        $acceptLanguage = $request->header('Accept-Language');
        $pages = Page::where('slug',$slug)->get();
        $translatedData = $pages->translate($acceptLanguage);
        return response()->json($translatedData);
    }

}