<?php

namespace App\Models;
use TCG\Voyager\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use Translatable;
    protected $translatable = ['title', 'content'];
}