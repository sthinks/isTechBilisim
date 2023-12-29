<?php

namespace App\Exports;

use App\Models\SeriForm;
use Maatwebsite\Excel\Concerns\FromCollection;

class SeriFormExport implements FromCollection
{
   
    protected $startDate;
    protected $endDate;

    public function __construct($startDate, $endDate)
    {
        $this->startDate = $startDate;
        $this->endDate = $endDate;
    }
    public function collection()
    {
        $data = SeriForm::whereBetween('fatura_tarihi', [$this->startDate, $this->endDate])->get(['seri_no', 'urun_adi', 'urun_rengi', 'firma_adi', 'fatura_numarasi', 'fatura_tarihi']);
        return $data;
    }
}
