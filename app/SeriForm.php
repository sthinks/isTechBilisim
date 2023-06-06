<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class SeriForm extends Model
{
    use Searchable;
    protected $fillable = ['seri_no'];
    public function toSearchableArray()
    {
        return [
            'seri_no' => $this->seri_no,
        ];
    }
}
