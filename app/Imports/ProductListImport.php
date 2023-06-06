<?php

namespace App\Imports;

use App\Models\ProductList;
use Maatwebsite\Excel\Concerns\ToModel;
use Carbon\Carbon;
class ProductListImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $data = [];

        foreach ($row as $rowData) {
            $dataArray = explode(',', $rowData);
            $data[] = $dataArray;
        }

        $productLists = [];
     
        foreach ($data as $rowData) {
          
            $invoiceDate = $rowData[6];
            $parts = explode('.', $invoiceDate); // ['13', '03', '2023']
                    
            $formattedDate = $parts[2] . '-' . $parts[1] . '-' . $parts[0];
            $productLists[] = new ProductList([
                'serial_no' => $rowData[1],
                'company' => $rowData[2],
                'product_name' => $rowData[3],
                'product_color' => $rowData[4],
                'invoice_no' => $rowData[5],
                'invoice_date' => $formattedDate,
            ]);
        }
        return $productLists;
    }
}
