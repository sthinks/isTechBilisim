<?php

namespace App\Imports;

use App\Models\ProductList;
use Maatwebsite\Excel\Concerns\ToModel;

class ProductListImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        
        return new ProductList([
            'id'     => $row[0],
            'serial_no'    => $row[1], 
            'company' => $row[2],
            'product_name' => $row[3],
            'product_color' => $row[4],
            'invoice_no' => $row[5],
            'invoice_date' => $row[6],
        ]);
    }
}
