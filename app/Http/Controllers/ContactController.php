<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\Mailling;
use App\Mail\SendContactMail;

class ContactController extends Controller
{
   public function index()
    {
        return view('contact');
    }

    public function submit(Request $request)
    {
   
     
        $data = $request->all();
        $validation = Validator::make($data, [
            'firstname' => ['required', 'string'],
            'lastname' => ['required', 'string'],
            'email' => ['required', 'string'],
            'message' => ['required', 'string'],
            'phone' => ['required', 'string'],
        ]);
       
        if ($validation->fails()) {
            return response()->json([
                'message' => $validation->errors(),
                'statusCode' => http_response_code(),
            ]);
        } else {
            $added = Contact::Create([
                'firstname' => $data['firstname'],
                'lastname' => $data['lastname'],
                'email' => $data['email'],
                'message' => $data['message'],
                'phone' => $data['phone'],
            ]);
          
            if ($added) {
                $details = [
                    'firstname' => $data['firstname'],
                    'lastname' => $data['lastname'],
                    'email' => $data['email'],
                    'message' => $data['message'],
                    'phone' => $data['phone'],
                ];
                Mail::to('info@istechiletisim.com')->send(new SendContactMail($details));
                return response()->json([
                    'message' => 'Success',
                    'statusCode' => http_response_code(),
                ]);
            } else {
                return response()->json([
                    'message' => 'Unsuccess',
                    'statusCode' => http_response_code(),
                ]);
            }
        }
    }
}