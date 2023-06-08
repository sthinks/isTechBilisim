<?php

namespace App\Exports;

use App\Models\SeriForm;
use Maatwebsite\Excel\Concerns\FromCollection;

class SeriFormExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return SeriForm::all();
    }
}
