<?php 
    require_once('connect.php');

    $username = $_POST['name'];
    $email = $_POST['email'];
    $sql = $dbh->prepare("INSERT INTO user(name, email) VALUES (?, ?)");
    $sql->bindParam(1, $username);
    $sql->bindParam(2, $email);
    $sql -> execute();
    
    $dbh = null;
?>