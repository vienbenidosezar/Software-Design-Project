<?php
    $username = $_POST['username'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $password =$_POST['password'];


    if (!empty($username) || !empty($first_name) || !empty($last_name) || !empty($email) || !empty($password)) {
        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "root";
        $dbname = "autostock";

        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

        if ($conn->connect_error) {
            die("Database Connection Failed: " . $conn->connect_error);
        } else {
            $SELECT = "SELECT email From users Where email = ? Limit 1";
            $INSERT = "INSERT Into users (username, first_name, last_name, email, password) value(?, ?, ?, ?, ?)";
            echo "Database Connected Successfully!";
        }

            $stmt = $conn->prepare($SELECT);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($email);
            $stmt->store_result();
            $rnum = $stmt->num_rows();

            if ($rnum==0) {
                $stmt->close();

                $stmt = $conn->prepare($INSERT);
                $stmt->bind_param("sssss", $username, $first_name, $last_name, $email, $password);
                $stmt->execute();

                echo "Successfully Inserted";
            } else {
                echo "someone already register";
            }
        echo "Database Connected Successfully!";
    } else {
        echo "All field are required";

        die();
    }
    echo "Database Connected Successfully!";

?>