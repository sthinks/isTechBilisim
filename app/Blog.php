<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;
use Laravel\Scout\Searchable;

class Blog extends Model
{
    use Translatable;
    use Searchable;
    protected $translatable = ['title', 'content'];
     public function toSearchableArray()
    {
        return [
            'content' => $this->content,
            'title' => $this->title,
        ];
    }
}
