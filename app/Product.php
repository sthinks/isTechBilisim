<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Product extends Model
{
    use Searchable;
    public function toSearchableArray()
    {
        
        return [
            'content' => $this->content,
            'title' => $this->title,
        ];
    }
}
