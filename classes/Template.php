<?php

class Template
{

    public static function header($title)
    {?>
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title><?=$title?> - Football Near You</title>
        </head>

        <body>
            <h1><?=$title?></h1>
            <nav>
                <a href="/booking-app/pages/courts.php">Courts</a>
                <a href="/booking-app/pages/login.php">Login</a>
                <a href="/booking-app/pages/register.php">Register</a>
                <a href="/booking-app/pages/rules.php">Rules of Futsal</a>
            </nav>
    <?php }

    public static function footer(){?>

            <footer>Football near you!</footer>
    <?php

    }
}
