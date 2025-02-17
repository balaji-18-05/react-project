import React from 'react'
import '../login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImage from 'bgimage.jpg';
export default function LoginPage() {
  return (
    <>
        <div className='login-container'>
          <label>Username : </label><input type='text' placeholder='Enter your name...'></input>
          <label>Email : </label><input type='mail' placeholder='Enter your mail id'></input>
          <label>Password : </label><input type='password' placeholder='Enter your password id'></input>
          <button className='btn btn-outline-primary'>submit</button>
        </div>
          <div style={{ 
          backgroundImage: `url(${bgImage})`, 
          backgroundSize: 'cover', 
          height: '100vh' 
          }}></div>
    </>
  )
}
