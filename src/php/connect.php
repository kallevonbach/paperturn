<?php 
    $host = "localhost:3306";
    $db = "paperturn";
    $user = "root";
    $password = "root";
    try {
        $dbh = new PDO("mysql:host=$host;dbname=$db", $user, $password);
    } catch (PDOException $ex) {
        echo "can't connect to database" . $ex;
    }
    ?>