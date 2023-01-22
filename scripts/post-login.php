<?php

require_once __DIR__ . "/../classes/UsersDatabase.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if (isset($_POST["username"]) && isset($_POST["password"])) {

    json_encode(file_get_contents("php:/input"));

    $users_db = new UsersDatabase();

    $user = $users_db->get_one_by_username($_POST["username"]);

    if ($user && $user->test_password($_POST["password"])) {
        session_start();

        $_SESSION["user"] = $user;

        header("Location: http://localhost:3000/booking-app/front-end/src/pages/Home.js");
    } 
    else {
        die("Invalid username or password");
    }
} 
else {
    die("Invalid input");
}
