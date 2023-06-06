<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class ProductList extends Model
{
    use Searchable;
    protected $fillable = ['id', 'serial_no', 'company', 'product_name', 'product_color', 'invoice_no', 'invoice_date'];
    public function toSearchableArray()
    {
        return [
            'serial_no' => $this->serial_no,
        ];
    }

}
