<?php

namespace App\Imports;

use App\Models\SeriForm;
use Maatwebsite\Excel\Concerns\ToModel;
use Carbon\Carbon;
class SeriFormImport implements ToModel
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
        
            $productLists[] = new SeriForm([
                'seri_no' => $rowData[1],
                'firma_adi' => $rowData[2],
                'urun_adi' => $rowData[3],
                'urun_rengi' => $rowData[4],
                'fatura_numarasi' => $rowData[5],
                'fatura_tarihi' => $formattedDate,
            ]);
        }
        return $productLists;
    }
}
