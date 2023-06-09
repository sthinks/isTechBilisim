<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class SeriForm extends Model
{
    use Searchable;
    protected $fillable = ['id', 'seri_no', 'urun_adi', 'urun_rengi', 'firma_adi', 'fatura_numarasi','fatura_tarihi' ,'kayit_tarihi'];
    public function toSearchableArray()
    {
        return [
            'seri_no' => $this->seri_no,
        ];
    }
}
 