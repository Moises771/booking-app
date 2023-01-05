<?php

require_once __DIR__ . "/Database.php";
require_once __DIR__ . "/Product.php";


class ProductsDatabase extends Database{
    //get one
    public function get_one($id)
    {
        $query = "SELECT * FROM products WHERE id = ?";

        $stmt = mysqli_prepare($this->conn, $query);

        $stmt->bind_param("i", $id);

        $stmt->execute();

        $result = $stmt->get_result();

        $db_product = mysqli_fetch_assoc($result);

        $product = null;

        if ($db_product) {
            $product = new Product(
                $db_product["name"],
                $db_product["description"],
                $db_product["price"],
                $db_product["img-url"],
                $id
            );
        }

        return $product;
    }

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
            $db_img_url = $db_product["img-url"];

            $products[] = new Product($db_name, $db_description, $db_price, $db_img_url, $db_id);

            
        }
        return $products;
    }

    public function create(Product $product)
    {
        $query = "INSERT INTO products (`name`, `description`, price, `img-url`) VALUES (?,?,?,?)";

        $stmt = mysqli_prepare($this->conn, $query);

        $stmt->bind_param("ssis", $product->name, $product->description, $product->price, $product->img_url);

        $success = $stmt->execute();

        return $success;
    }

    public function update(Product $product, $id)
    {
        $query = "UPDATE products SET `name`=?, `description`=?, price=?, `img-url`=? WHERE id=?";

        $stmt = mysqli_prepare($this->conn, $query);

        $stmt->bind_param(
            "ssisi",
            $product->name,
            $product->description,
            $product->price,
            $product->img_url,
            $id
        );

        return $stmt->execute();
    }

    public function delete($id){
        $query = "DELETE FROM products WHERE id = ?";

        $stmt = mysqli_prepare($this->conn, $query);

        $stmt->bind_param("i", $id);

        return $stmt->execute();
    }

}

