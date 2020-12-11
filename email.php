<?php

if(!empty($_POST)){
var_dump($_POST);

$mess = ''.$_POST['prenom'].' '.$_POST['nom'].' '.$_POST['objet'].' '.$_POST['mail'].'from :'. $_POST['email'];

$mail = mail('tristan3755@gmail.com','Envoi depuis la page Contact',$mess);

}else{
    echo "veuillez remplir tous les champs";
}
?>
