<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
class ProductList extends Model
{
    use Searchable;
    protected $fillable = ['serial_no'];
    public function toSearchableArray()
    {
        return [
            'serial_no' => $this->serial_no,
        ];
    }
}