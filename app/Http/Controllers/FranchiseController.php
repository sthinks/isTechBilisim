<?php

namespace App\Http\Controllers;

use App\Models\Franchise;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FranchiseController extends Controller
{
   
    public function submit(Request $request)
    {
        $data = $request->all();
        $validation = Validator::make($data, [
            'firstname' => ['required', 'string'],
            'lastname' => ['required', 'string'],
            'phone' => ['required', 'string'],
            'email' => ['required', 'string'],
            'subject' => ['required', 'string'],
            'message' => ['required', 'string'],
        ]);

        if ($validation->fails()) {
            return response()->json([
                'message' => $validation->errors(),
                'statusCode' => http_response_code(),
            ]);
        } else {
            $added = Franchise::Create([
                'firstname' => $data['firstname'],
                'lastname' => $data['lastname'],
                'email' => $data['email'],
                'subject' => $data['subject'],
                'phone' => $data['phone'],
                'message' => $data['message'],
            ]);
            if ($added) {
                $details = [
                    'firstname' => $data['firstname'],
                    'lastname' => $data['lastname'],
                    'email' => $data['email'],
                    'subject' => $data['subject'],
                    'phone' => $data['phone'],
                    'message' => $data['message'],
                ];
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