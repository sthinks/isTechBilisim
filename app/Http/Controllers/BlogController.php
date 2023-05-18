<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
   public function getAllBlog()
    {
        $data = Blog::orderBy('order', 'asc')->get();
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
    public function getBlogId($slug)
    {
        $data = Blog::where('slug', $slug)->first();
        $data->image = url(
                sprintf(
                    'storage/%s',
                    str_replace('\\', '/', $data->image)
                )
            );
        
        return response()->json($data);
    }
}