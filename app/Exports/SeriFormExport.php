<?php

namespace App\Exports;

use App\Models\SeriForm;
use Maatwebsite\Excel\Concerns\FromCollection;

class SeriFormExport implements FromCollection
{
     public function collection()
    {
        $data = SeriForm::take(20000)->get();

       

        return $data;
    }
}
