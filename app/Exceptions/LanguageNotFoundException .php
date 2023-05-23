<?php

namespace App\Exceptions;

use Exception;

class LanguageNotFoundException extends Exception
{
     protected $message = 'Language not found.';
}