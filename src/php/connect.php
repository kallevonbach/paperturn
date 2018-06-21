<?php 
    $host = "mysql24.unoeuro.com";
    $db = "casperbach_dk_db4";
    $user = "anon";
    $password = "nope";
    try {
        $dbh = new PDO("mysql:host=$host;dbname=$db", $user, $password);
    } catch (PDOException $ex) {
        echo "can't connect to database" . $ex;
    }
    ?>