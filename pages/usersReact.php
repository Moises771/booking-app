<?php

require_once __DIR__ . "/../classes/Template.php";
require_once __DIR__ . "/../classes/UsersDatabase.php";
require_once __DIR__ . "/../classes/User.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



$users_db = new UsersDatabase();

$users = $users_db->get_all();

echo json_encode($users);

















