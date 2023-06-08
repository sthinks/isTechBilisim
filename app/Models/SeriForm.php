<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
class SeriForm extends Model
{
    use Searchable;
    protected $fillable = ['id', 'seri_no', 'urun_adi', 'urun_rengi', 'firma_adi', 'fatura_numarasi', 'kayit_tarihi'];
    public function toSearchableArray()
    {
        return [
            'seri_no' => $this->seri_no,
        ];
    }
}