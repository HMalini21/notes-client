import React from 'react';
import './Login.css';

export default function Login() {
  // function submitUser (){

  // }
  return (
    <div>
      <form className="wrapper">
        <h2>LOGIN</h2>
        <div className="input-box">
          <input type="text" placeholder="UserName" required></input>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter your password" required></input>
        </div>
        <div className="remember-forget">
          <label>
            <input type="checkBox" />
            Rememberme
          </label>
          <a href="#">forget password ?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            don't have an accout?<a href="#">register</a>
          </p>
        </div>
      </form>
    </div>
  );
}
