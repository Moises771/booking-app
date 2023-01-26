
function Login() {
    
  
    return(
        <>
        <h1>Login</h1>
        <div>
        <form action="http://localhost:8080//booking-app/scripts/post-login.php" method="post">
                 <input type="text" name="username" placeholder="Username"  /> <br></br> 
                 <input type="password" name="password" placeholder="Password" /> <br></br>
                 <input type="submit" value="Login"/> <br></br>
        </form>
        </div>

        </>
    )
}

export default Login;


