<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = sanitize_input($_POST["name"]);
    $email = sanitize_input($_POST["email"]);
    $subject = sanitize_input($_POST["subject"]);
    $message = sanitize_input($_POST["message"]);

    $recipient = "oksanadotsenko967@gmail.com";  // replace with your email
    $subject = "Contact Form Submission";
    $email_header = "From: $email";

    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Subject:\n$subject\n";
    $email_body .= "Message:\n$message\n";

    if (mail($recipient, $subject, $email_body, $email_header)) {
        echo "success";
   
    } else {
        echo "Something went wrong. Please try again.";
    }
}

function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>