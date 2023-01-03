<?php

require_once __DIR__ . "/Database.php";
require_once __DIR__ . "/Product.php";


class ProductsDatabase extends Database{
    //get one
    //get all
    public function get_all(){
        $query = "SELECT * FROM products";

        $result = mysqli_query($this->conn, $query);

        $db_products = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $products = [];

        foreach($db_products as $db_product) {
            $db_id = $db_product["id"];
            $db_name = $db_product["name"];
            $db_description = $db_product["description"];
            $db_price = $db_product["price"];

            $products[] = new Product($db_name, $db_description, $db_price, $db_id);

            
        }
        return $products;
    }
    //create

    
    //update
    //delete
}

