<?php

$address = "";

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$error = false;
$fields = array('name', 'email', 'message', 'subject');

foreach ($fields as $field) {
    if (empty($_POST[$field]) || trim($_POST[$field]) == '')
        $error = true;
}

if (!$error) {

    $name = stripslashes($_POST['name']);
    $email = trim($_POST['email']);
    $message = stripslashes($_POST['message']);
    $subject = stripslashes($_POST['subject']);

    $e_subject = 'You\'ve been contacted by ' . $name . '.';

    $e_body = "You have been contacted by: $name" . PHP_EOL . PHP_EOL;
    $e_body .= "E-mail: $email" . PHP_EOL . PHP_EOL;
    $e_body .= "Message:\r\n$message" . PHP_EOL . PHP_EOL;
    $e_body .= "Subject: $subject" . PHP_EOL . PHP_EOL;

    $msg = wordwrap($e_body, 70);

    $headers = "From: $email" . PHP_EOL;
    $headers .= "Reply-To: $email" . PHP_EOL;
    $headers .= "Subject: $subject" . PHP_EOL;
    $headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;

    if (mail($address, $e_subject, $msg, $headers)) {

        // E-posta başarıyla gönderildiğinde başarılı bir sayfa göster.
		echo '<p style="color: green;">E-posta başarıyla gönderildi!</p>';

    } else {

        echo 'ERROR!';

    }

} else {
    echo 'ERROR! Required fields are missing.';
}

?>