<?php
header('Content-Type: application/json');

// Replace with your actual receiving email address
$receiving_email_address = 'a.hossammahmoud2164@nu.edu.eg';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $from_name = strip_tags($_POST['name']);
    $from_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $subject = strip_tags($_POST['subject']);
    $message = strip_tags($_POST['message']);

    // Check if all fields are filled
    if (!$from_name || !$from_email || !$subject || !$message) {
        echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
        exit;
    }

    // Prepare the email headers and message
    $headers = "From: $from_name <$from_email>\r\n" .
               "Reply-To: $from_email\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $email_body = "Name: $from_name\n";
    $email_body .= "Email: $from_email\n\n";
    $email_body .= "Subject: $subject\n\n";
    $email_body .= "Message:\n$message\n";

    // Send the email
    if (mail($receiving_email_address, $subject, $email_body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Your message has been sent. Thank you!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Unable to send email. Please try again later.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request.']);
}
?>
