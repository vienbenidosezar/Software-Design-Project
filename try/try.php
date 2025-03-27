<?php
    $db_server = "localhost";
    $db_server = "root";
    $db_pass = "root";
    $db_name = "testing";

    $conn = mysqli_connect($db_server, $db_server, $db_pass, $db_name);

    if($conn) {
        echo"connected";

    }else {
        echo"not connect";
    }
?>