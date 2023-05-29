<html>
<head>
    <title>Bayilik başvuru formu</title>
<body>
    <table border='0' cellspacing='0' cellpadding='6'>
        <tr>
          <td style='border-bottom:1px solid #CCCCCC;'><strong>Ad Soyad</strong></td>
          <td style='border-bottom:1px solid #CCCCCC;'>{{$data['firstname']}} {{$data['lastname']}}</td>
        </tr>
          <tr>
          <td style='border-bottom:1px solid #CCCCCC;'><b>Telefon:</b></td>
          <td style='border-bottom:1px solid #CCCCCC;'> {{$data['phone']}}</td>
        </tr>
        <tr>
          <td style='border-bottom:1px solid #CCCCCC;'><b>E-Posta</b></td>
          <td style='border-bottom:1px solid #CCCCCC;'> {{$data['email']}}</td>
        </tr>
        <tr>
          <td style='border-bottom:1px solid #CCCCCC;'><b>Konu:</b></td>
          <td style='border-bottom:1px solid #CCCCCC;'>{{$data['subject']}}</td>
        </tr>
        <tr>
          <td style='border-bottom:1px solid #CCCCCC;'><b>Mesaj</b></td>
          <td style='border-bottom:1px solid #CCCCCC;'>{{$data['message']}}</td>
        </tr>
      </table>
</body>
</head>
</html>
