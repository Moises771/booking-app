<?php

require_once __DIR__ . "/../classes/Product.php";
require_once __DIR__ . "/../classes/ProductsDatabase.php";
require_once __DIR__ . "/../classes/Template.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$products_db = new ProductsDatabase();

$products = $products_db->get_all();

Template::header("Courts");

foreach ($products as $product) : ?>

    <div>
        <b><?= $product->name ?></b>
        <i><?= $product->price ?> kr</i>
        <img src="<?= $product->img_url ?>" width="100" height="100" alt="Product image">
    </div>

<?php

endforeach;

Template::footer();
