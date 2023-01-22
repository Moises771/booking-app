import React from 'react'

 function Register() {

  return(
      <>
      <h1>Register</h1>
      <div>
      <form action="http://localhost:8080/booking-app/scripts/post-register-user.php" method="post">
        <input type="text" name="username" placeholder="username"/> <br/>
        <input type="password" name="password" placeholder="password"/> <br/>
        <input type="password" name="confirm-password" placeholder="confirm password"/> <br/>
        <input type="submit" value="Register"></input> <br/>
      </form>
      </div>
      
      </>
  )
}

export default Register;




