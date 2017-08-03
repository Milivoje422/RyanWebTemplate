<?php
 

function isEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}
 
if($_POST) {
 
    $emailTo = 'example@gmail.com';
 
    $clientEmail = addslashes(trim($_POST['email']));
    $name = addslashes(trim($_POST['name']));
    $message = addslashes(trim($_POST['message']));
 
    $array = array('emailMessage' => '', 'nameMessage' => '', 'messageMessage' => '');
 
    if(!isEmail($clientEmail)) {
        $array['emailMessage'] = 'Invalid email!';
    }
    if($subject == '') {
        $array['nameMessage'] = 'Empty name!';
    }
    if($message == '') {
        $array['messageMessage'] = 'Empty message!';
    }
    if(isEmail($clientEmail) && $name != '' && $message != '') {

        $headers = "From: " . $clientEmail . " <" . $clientEmail . ">" . "\r\n" . "Reply-To: " . $clientEmail;
        mail($emailTo, $subject . " (Ovo ne znam šta je )", $message, $headers);
    }
 
    echo json_encode($array);
 
}
 
?>