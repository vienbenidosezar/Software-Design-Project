<?php
$host = "localhost";
$dbUsername = "root";
$dbPassword = "root";
$dbname = "autostock";

// Establish database connection
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}

// Retrieve user input safely
$username = trim($_POST['username']);
$password = trim($_POST['password']);

if (empty($username) || empty($password)) {
    die("Error: Username and Password are required!");
}

// Check if user is an admin
$query = "SELECT * FROM admin WHERE admin_username = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 1) {
    $admin = $result->fetch_assoc();
    
    if ($password === $admin['admin_password']) {
        echo "You are admin";
    } else {
        echo "Invalid password!";
    }
} else {
    // Admin login failed, check if user is registering
    $checkUser = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($checkUser);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $userResult = $stmt->get_result();

    if ($userResult->num_rows > 0) {
        echo "Username already taken!";
    } else {
        // Hash the password before storing it
        $INSERT = "INSERT INTO users (username, password) VALUES (?, ?)";
        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("ss", $username, $password);

        if ($stmt->execute()) {
            echo "Successfully Registered!";
        } else {
            echo "Error: " . $stmt->error;
        }
    }
}

$stmt->close();
$conn->close();
?>
