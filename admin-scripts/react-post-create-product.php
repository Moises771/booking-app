<?php

require_once __DIR__ . "/../classes/ProductsDatabase.php";

require_once __DIR__ . "/force-admin.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$success = false;


if(isset($_POST["name"]) && isset($_POST["description"]) && isset($_POST["price"])){

    $upload_directory = __DIR__ . "/../assets/uploads/"; 

    $upload_name= basename($_FILES["image"]["name"]); 

    $name_parts = explode(".", $upload_name); 

    $file_extension = end($name_parts); // 

    $timestamp = time(); // 

    $file_name = "{$timestamp}.{$file_extension}"; 

    $full_upload_path = $upload_directory . $file_name; //

    $full_relative_url = "/booking-app/assets/uploads/{$file_name}";

    $success = move_uploaded_file($_FILES["image"]["tmp_name"], $full_upload_path);

    if($success){
        $product = new Product($_POST["name"], $_POST["description"], $_POST["price"], $full_relative_url);

        $products_db = new ProductsDatabase();

        $success = $products_db->create($product);
    }
}
else{
    die("Invalid input");
}


if($success){
    header("Location:http://localhost:3000/booking-app/front-end/src/pages/Admin.js");
    die();
}
else{
    die("Error saving product");
}