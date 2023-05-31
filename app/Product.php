<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class Product extends Model
{
    use Translatable;
    protected $translatable = ['title', 'content'];
    protected $fillable = ['id','name','company', 'product_image','product_detail_image','description'];
   
}
