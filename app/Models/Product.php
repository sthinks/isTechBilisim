<?php

namespace App\Models;
use TCG\Voyager\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use Translatable;
    protected $translatable = ['title', 'content'];
     protected $fillable = ['id','name','company', 'product_image','product_detail_image','description'];
}