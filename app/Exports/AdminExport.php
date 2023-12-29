<?php

namespace App\Exports;

use App\Models\SeriForm;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Contracts\Queue\ShouldQueue;

class AdminExport implements FromCollection, ShouldQueue
{
    protected $results;
    protected $index;
    protected $index2;

    public function __construct($value,$index)
    {
        $this->results = $value;
        $this->index = $index;
        $this->index2 = 1;
    }

    public function collection()
    {
        $this->index2 = ($this->index - 1) * 10000;
        $this->index = $this->index * 10000;
        $data = SeriForm::where($this->results['slug'], 'LIKE', '%' . $this->results['value'] . '%')
            ->skip($this->index2) 
            ->take($this->index)   
            ->get();

        // Verileri tek bir satırda virgülle ayırarak birleştir
        $csvData = $data->map(function($item) {
            return implode(',', $item->toArray());
        })->implode(PHP_EOL); // Her satırı yeni bir satır karakteriyle birleştir

        return [$csvData];
    }

}

