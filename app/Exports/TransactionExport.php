<?php

namespace App\Exports;

use App\Models\SeriForm;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TransactionExport implements FromQuery, WithHeadings, WithMapping
{
    use Exportable;
    
    public function query()
    {
        return SeriForm::query();
    }

    public function headings(): array
    {
        return [
            '#',
            'aa',
            'bb',
            'cc',
            'dd',
            'ee',
            'ff',
            'gg'
        ];
    }

    public function map($transaction): array
    {
        return [
            $transaction->id,
            $transaction->seri_no,
            $transaction->urun_adi,
            $transaction->urun_rengi,
            $transaction->firma_adi,
            $transaction->fatura_numarasi,
            $transaction->fatura_tarihi,
            $transaction->kayit_tarihi,
            $transaction->kayit_user,
        ];
    }

    public function fields(): array
    {
        return [
            'id',
            'seri_no',
            'urun_adi',
            'urun_rengi',
            'firma_adi',
            'fatura_numarasi',
            'fatura_tarihi',
            'kayit_tarihi',
            'kayit_user',
        ];
    }
}
