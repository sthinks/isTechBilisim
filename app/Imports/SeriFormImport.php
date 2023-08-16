<?php

namespace App\Imports;

use App\Models\SeriForm;
use Maatwebsite\Excel\Concerns\ToModel;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithChunkReading;
class SeriFormImport implements ToModel,WithChunkReading,ShouldQueue
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    private $skipFirstRow = true;
    public function model(array $row)
    {
        if ($this->skipFirstRow) {
            $this->skipFirstRow = false;
            return null;
        }
        $excelDate = $row[5]; // Assuming the date is in the 6th column (index 5)

        // Convert Excel date to Unix timestamp
        $unixTimestamp = ($excelDate - 25569) * 86400;

        // Format Unix timestamp to MySQL datetime format (Y-m-d H:i:s)
        $formattedDate = date('Y-m-d H:i:s', $unixTimestamp);
        $currentDateTime = Carbon::now();
        return new SeriForm([
           'seri_no'     => $row[0],
           'firma_adi'    => $row[3], 
           'urun_adi' => $row[1],
           'urun_rengi' => $row[2],
           'fatura_numarasi' => $row[4],
           'fatura_tarihi' => $formattedDate,
           'kayit_tarihi' =>   $currentDateTime,          
           
        ]);
    }
    public function chunkSize(): int
    {
        return 15000;
    }
    
}
