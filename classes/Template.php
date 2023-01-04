<?php
require_once __DIR__ . "/User.php";

session_start();

class Template
{

    public static function header($title)
    {
        $is_logged_in = isset($_SESSION["user"]);
        $logged_in_user = $is_logged_in ? $_SESSION["user"] : null;
        $is_admin = $is_logged_in && ($logged_in_user->role == "admin");

?>
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title><?= $title ?> - Football Near You</title>
        </head>

        <body>
            <h1><?= $title ?></h1>
            <nav>
                <a href="/booking-app">Home</a>
                <a href="/booking-app/pages/courts.php">Courts</a>

                <?php if (!$is_logged_in) : ?>
                    <a href="/booking-app/pages/login.php">Login</a>
                    <a href="/booking-app/pages/register.php">Register</a>

                <?php elseif ($is_admin) : ?>
                    <a href="/booking-app/pages/admin.php">Admin Area</a>
                <?php endif; ?>

                <a href="/booking-app/pages/rules.php">Rules of Futsal</a>
            </nav>

            <?php if ($is_logged_in) : ?>
                <p>
                    <b>logged in as:</b>
                    <?= $logged_in_user->username ?>
                <form action="/booking-app/scripts/post-logout.php" method="post">
                    <input type="submit" value="Logout">
                </form>
                </p>
            <?php endif; ?>

            <hr>
        <?php }

    public static function footer()
    { ?>

            <footer>Football near you!</footer>
    <?php

    }
}
