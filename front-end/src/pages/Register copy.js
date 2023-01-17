import React from 'react'
import { useState } from 'react';
import axios from 'axios';


 function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmpassword] = useState('')



  const handleSubmit =  () => {
    if(username.length === 0){
      alert("username left blank");
    }
    else  if(password.length === 0){
      alert("password left blank");
    }
    else  if(password !== confirmPassword){
      alert("passwords don't match");
    }

    else{
      const url = "http://localhost:8080/booking-app/scripts/post-register-user.php";

      let fData = new FormData();
      fData.append('username', username);
      fData.append('password', password);

      axios.post(url, fData)
      .then(response=>alert(response.data))
      .catch(error=> alert(error));
     }
  }


  return(
      <>
      <h1>Register</h1>
      <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="username" id='username' value={username} onChange={(e) => setUsername(e.target.value)}/><br></br>
          <label htmlFor="password">Password</label> 
          <input type="password" name="password" placeholder="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/><br></br>
          <label htmlFor="password">Password</label> 
          <input type="password" name="confirmPassword" placeholder="confirm password" id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmpassword(e.target.value)}/><br></br>
          <input type="submit" value="Register" onClick={handleSubmit}/>
      </div>
      
      </>
  )
}

export default Register;




