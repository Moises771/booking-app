<?php

require_once __DIR__ . "/../classes/ProductsDatabase.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$success = false;

if (isset($_POST["id"])) {

    json_encode(file_get_contents("php:/input"));

    $products_db = new ProductsDatabase();

    $success = $products_db->delete($_POST["id"]);
} else {
    die("Invalid input");
}

if ($success) {
    header("Location: http://localhost:3000/booking-app/front-end/src/pages/AdminProduct.js");
    die();
} else {
    die("Error deleting product");
}
