<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Guide extends Model
{
    public function pdfGuide()
    {
        return $this->hasMany(PdfGuide::class);
    }
}
