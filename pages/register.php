<?php 
require_once __DIR__ . "/../classes/Template.php";
Template::header("Register");
?>
<body>
    <h1>Register</h1>
    <form action="/booking-app/scripts/post-register-user.php" method="post">
        <input type="text" name="username" placeholder="username"> <br>
        <input type="password" name="password" placeholder="password"> <br>
        <input type="password" name="confirm-password" placeholder="confirm password"> <br>
        <input type="submit" value="Register" <br>
    </form>
</body>
</html>
<?php

Template::footer();