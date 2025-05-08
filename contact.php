<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "portfolio";

// Connect to database
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from POST
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Insert into database
$sql = "INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $email, $subject, $message);
$stmt->execute();

echo "Message sent successfully!";
$stmt->close();
$conn->close();
?>
