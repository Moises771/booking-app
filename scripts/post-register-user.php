<?php

require_once __DIR__ . "/../classes/User.php";
require_once __DIR__ . "/../classes/UsersDatabase.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$success = false; 

if (
    isset($_POST["username"]) &&
    isset($_POST["password"]) &&
    isset($_POST["confirm-password"]) &&
    strlen($_POST["username"]) > 0 &&
    strlen($_POST["password"]) > 0 &&
    $_POST["password"] == $_POST["confirm-password"]
) {
    $users_db = new UsersDatabase();
    
    $user = new User($_POST["username"], 'customer');
    
    $user->hash_password($_POST["password"]);

    $existing_user = $users_db->get_one_by_username($_POST["username"]);

    if ($existing_user) {
        die("Username taken");
    }
    else{

       $success = $users_db->create($user);
    }

} else {
    
die("Invalid input");
}

if ($success) {
    header("Location: http://localhost:3000/booking-app/front-end/src/pages/Home.js");
}

else{
    die("Error saving user");
}