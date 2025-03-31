<?php
    $username = $_POST['username'];   

    $conn = mysqli_connect('localhost', 'root', 'root', 'testing');

    if ($conn->connect_error) {
        die('Connection failed: ');
    }else {
        $stmt = $conn->prepare("INSERT INTO registration(name) VALUES(?)");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt ->close();
        $conn ->close();

    }
?>