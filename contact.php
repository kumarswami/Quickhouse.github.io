<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name    = htmlspecialchars($_POST['name']);
  $email   = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $to      = "your-email@example.com"; // Replace with your email
  $subject = "New Inquiry from $name";
  $body    = "Name: $name\nEmail: $email\nMessage:\n$message";

  if (mail($to, $subject, $body)) {
    echo "Thank you for your message!";
  } else {
    echo "Message delivery failed.";
  }
} else {
  echo "Invalid request.";
}
?>
