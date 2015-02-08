<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $from = 'From: Que cor é agora?';
  $to = 'falecom@guilhermeesteves.com';
  $subject = 'Contato via QueCorÉAgora';

  $body = "De: $name\n E-Mail: $email\n Mensagem:\n $message";

  if ($name != '' && $email != '' && $message != '') {
    if (mail ($to, $subject, $body, $from)) {
      echo '<p>Your message has been sent!</p>';
    } else {
      echo '<p>Something went wrong, go back and try again!</p>';
    }
  } else {
      echo '<p>You need to fill in all required fields!!</p>';
  }


?>
