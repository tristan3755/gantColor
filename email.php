<?php

if(!empty($_POST)){


$mess = ''.$_POST['prenom'].' '.$_POST['nom'].' , '.$_POST['objet'].' : '.$_POST['mail'].'     '.'from :'. $_POST['email'];

$mail = mail('tristan3755@gmail.com','Envoi depuis la page Contactdu site gantColor',$mess);

}

header('Location:./index.html');
exit;

?>
