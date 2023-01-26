<?php
require_once __DIR__ . "/User.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

session_start();

// $is_logged_in= isset($_SESSION["user"]);
// $logged_in_user = $is_logged_in ? $_SESSION["user"] : null;
// $is_admin = $is_logged_in && ($logged_in_user->role == "admin");

$_SESSION['user'];




echo json_encode(array($_SESSION));
