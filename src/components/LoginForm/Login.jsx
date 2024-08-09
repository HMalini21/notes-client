import React, { useState } from 'react';
import './Login.css';

export default function Login(props) {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  function submitUser(e) {
    e.preventDefault();
    console.log('your logged in');
  }
  return (
    <div>
      <form className="wrapper" onClick={submitUser}>
        <h2>LOGIN</h2>
        <div className="input-box">
          <input
            value={name}
            type="text"
            placeholder="UserName"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="input-box">
          <input
            value={pass}
            type="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPass(e.target.value)}
          ></input>
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
            don't have an accout?
            <a href="#" onClick={() => props.toggleForm('register')}>
              register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
