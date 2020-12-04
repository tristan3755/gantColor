<?php

var_dump($_POST);

$mail = mail('tristan3755@gmail.com', 'Envoi depuis la page Contact',$_POST['prenom'],$_POST['nom'],$_POST['objet'], $_POST['mail'],'from :'. $_POST['email'].'');
if ($mail) {
    echo '<p>Votre message a bien été envoyé.</p>';
}
?>

