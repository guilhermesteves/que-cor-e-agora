<?php
  $name = $_POST['form_name'];
  $email = $_POST['form_email'];
  $message = $_POST['msg_text'];
  $from = 'From: Que cor é agora?';
  $to = 'falecom@guilhermeesteves.com';
  $subject = 'Contato via QueCorÉAgora';

  $body = "De: $name\n E-Mail: $email\n Mensagem:\n $message";

  if ($name != '' && $email != '' && $message != '') {
    if (mail ($to, $subject, $body, $from)) {
      echo '<p>Sua mensagem foi enviada com sucesso!</p>';
    } else {
      echo '<p>Algo deu errado, volte e tente novamente!</p>';
    }
  } else {
      echo '<p>Voc^e precisa preencher todos os campos!!</p>';
  }


?>
