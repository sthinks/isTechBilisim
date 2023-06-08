<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithMapping;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Models\SeriForm;

class LargeDataExport implements FromQuery, WithMapping, ShouldQueue
{
    public function query()
    {
        return SeriForm::query();
    }

    public function map($row): array
    {
        
        return [
            $row->id,
            $row->seri_no,
        ];
    }
}