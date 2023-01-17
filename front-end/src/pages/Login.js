
function Login() {

    return(
        <>
        <h1>Login</h1>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username"/><br></br>
            <label htmlFor="password">Password</label> 
            <input type="password" name="password" id="password"/><br></br>
            
            <input type="submit" value="Login" />
        </div>
        
        </>
    )
}

export default Login;
