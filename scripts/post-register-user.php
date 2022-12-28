<?php 

if(isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["confirm-password"])){
    echo "Valid input";
}

else{
    echo "Invalid input";
}
?>