<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
class SeriForm extends Model
{
    use Searchable;
    protected $fillable = ['id', 'seri_no', 'urun_adi', 'urun_rengi', 'firma_adi', 'fatura_numarasi','fatura_tarihi' , 'kayit_tarihi'];
    public function toSearchableArray()
    {
        return [
            'urun_adi' => $this->urun_adi,
            'seri_no' => $this->seri_no,
            'urun_rengi' => $this->urun_rengi,
            'firma_adi' => $this->firma_adi,
            'fatura_numarasi' => $this->fatura_tarihi,
            'kayit_tarihi' => $this->kayit_tarihi,
            'fatura_tarihi' => $this->fatura_tarihi,
        ];  
    }
}