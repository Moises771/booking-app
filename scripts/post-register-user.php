<?php

if (
    isset($_POST["username"]) &&
    isset($_POST["password"]) &&
    isset($_POST["confirm-password"]) &&
    strlen($_POST["username"]) > 0 &&
    strlen($_POST["password"]) > 0 &&
    $_POST["password"] == $_POST["confirm-password"]
) {
    echo "Valid input";
} else {
    echo "Invalid input";
}
