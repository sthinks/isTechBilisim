<?php

namespace App\Business\Concrete;

use App\Models\ContactFormLong;
use Hamcrest\Type\IsInteger;
use Illuminate\Database\Events\TransactionBeginning;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Business\Abstracts\IntegrationServiceInterface;
use App\Models\ContactForm;

class IntegrationService implements IntegrationServiceInterface
{
    protected $db;
    function sendThisMail($tesis_adi_id, $musteri)
    {
        $sendingCallCenter = [];
 
        $result = \Mail::to($sendingCallCenter)->send(
            new \App\Mail\Mailing($details)
        );
        $result;
        if ($result) {
            return true;
        }
    }
    function sendMail($details)
    {
        Mail::send(new \App\Mail\SendContactMail($details));
    }
 
    function sendContactMail($data)
    {
       
        
    }

    
}
