<?php
// Honeypot check
if (!empty($_POST['company_name'])) {
    http_response_code(400);
    echo 'Spam detected.';
    exit;
}

// Load config
$config = require 'env.php'; // adjust path if needed

// Load PHPMailer
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // SMTP Settings (now using config values)
    $mail->isSMTP();
    $mail->Host       = $config['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['SMTP_USER'];
    $mail->Password   = $config['SMTP_PASS'];
    $mail->SMTPSecure = $config['SMTP_SECURE'];
    $mail->Port       = $config['SMTP_PORT'];

    // Email setup
    $mail->setFrom($config['SMTP_FROM'], $config['SMTP_FROM_NAME']);
    $mail->addAddress($config['TO_EMAIL'], $config['TO_NAME']);
    $mail->Subject = $config['EMAIL_SUBJECT'];

    // Sanitize form fields
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail->Body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    $mail->send();
    http_response_code(200);
    echo 'Message sent successfully.';
} catch (Exception $e) {
    http_response_code(500);
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}