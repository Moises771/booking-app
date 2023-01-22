<?php

require_once __DIR__ . "/../classes/ProductsDatabase.php";

require_once __DIR__ . "/force-admin.php";

$success = false;

if (isset($_POST["id"])) {
    $products_db = new ProductsDatabase();

    $success = $products_db->delete($_POST["id"]);
} else {
    die("Invalid input");
}

if ($success) {
    header("Location: http://localhost:3000/booking-app/front-end/src/pages/Admin.js");
    die();
} else {
    die("Error deleting product");
}
