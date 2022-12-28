<?php
require_once __DIR__ . "/classes/Database.php";

$db = new Database();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <h1>Football Near You</h1>
    <nav>
        <a href="/booking-app/pages/courts.php">Courts</a>
        <a href="/booking-app/pages/login.php">Login</a>
        <a href="/booking-app/pages/register.php">Register</a>
    </nav>
</body>
</html>