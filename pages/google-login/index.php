<?php

require_once __DIR__ . "/../../classes/Template.php";

Template::header("Login");

//Include Google Configuration File
require_once __DIR__ . "/google-config.php";

if (!isset($_SESSION['access_token'])) {
    //Create a URL to obtain user authorization
    $google_login_btn = '<a href="' . $google_client->createAuthUrl() . '">Login with Google</a>';
} else {
    header("Location: google-login.php");
}

?>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>PHP Login With Google</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport' />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

</head>

<h1>Login</h1>

<form action="/booking-app/scripts/post-login.php" method="post">
    <input type="text" name="username" placeholder="Username"> <br>
    <input type="password" name="password" placeholder="Password"> <br>
    <input type="submit" value="Login">

</form>

<body>
    <div class="container">
        <br />
        <h2 align="center">PHP Login With Google</h2>
        <br />
        <div class="panel panel-default">
            <?php
            echo '<div align="center">' . $google_login_btn . '</div>';
            ?>
        </div>
    </div>
</body>

</html>