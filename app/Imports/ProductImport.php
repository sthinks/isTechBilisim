<?php

namespace App\Imports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\ToModel;

class ProductImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Product([
          
            'name'    => $row[1], 
            'product_image' => $row[2],
            'product_detail_image' => $row[3],
            'description' => $row[4],
        ]);
    }
}
