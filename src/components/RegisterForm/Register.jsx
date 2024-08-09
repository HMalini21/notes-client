import React, { useState } from 'react';

export default function Register(props) {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  function submitUser(e) {
    e.preventDefault();
    console.log("You're Signed In");
  }
  return (
    <div>
      <form className="wrapper" onClick={submitUser}>
        <h2>REGISTER</h2>
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
        <button type="submit">SignIn</button>
        <div className="register-link">
          <p>
            already have an accout?
            <a href="#" onClick={() => props.toggleForm('login')}>
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
