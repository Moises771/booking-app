<?php

require_once __DIR__ . "/../classes/Template.php";
require_once __DIR__ . "/../classes/ProductsDatabase.php";
require_once __DIR__ . "/../classes/UsersDatabase.php";

$is_logged_in = isset($_SESSION["user"]);
$logged_in_user = $is_logged_in ? $_SESSION["user"] : null; 
$is_admin = $is_logged_in && $logged_in_user->role == "admin";

if (!$is_admin) {
    http_response_code(401);
    die("Not an admin");

}

$products_db = new ProductsDatabase();

$users_db = new UsersDatabase();

$users = $users_db->get_all();

$products = $products_db->get_all();

Template::header("Admin Page"); ?>

<h2>Create Product</h2>

<form action="/booking-app/admin-scripts/post-create-product.php" method="post" enctype="multipart/form-data">
    <input type="text" name="name" placeholder="Name"> <br>
    <textarea name="description" placeholder="Description"></textarea> <br>
    <input type="number" name="price" placeholder="Price"> <br>
    <input type="file" name="image" accept="image/*"> <br>
    <input type="submit" value="Save">
</form>

<hr>

<h2>Products</h2>

 <?php foreach ($products as $product) : ?>
    <p>
        <a href="/booking-app/pages/admin-product.php?id=<?= $product->id ?>">
            <?= $product->name?>
            <img src="<?= $product->img_url ?>" width="100" height="100" alt="Product image">
        </a>
    </p>
<?php endforeach; ?>

<hr>

<h2>Users</h2>

<?php foreach ($users as $user) : ?>
    
    <p>
        <a href="/booking-app/pages/admin-user.php?id=<?= $user->id ?>"><?= $user->username ?></a>
        <i><?= $user->role ?></i>
    </p>

<?php endforeach; ?>





<?php 
Template::footer();

