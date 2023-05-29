<?php
namespace App\Business\Abstracts;
interface IntegrationServiceInterface{
    function sendThisMail($tesis_adi_id, $musteri);
    function sendMail($fullname, $email, $club, $phone, $subeid);
    function sendContactMail($data);
}