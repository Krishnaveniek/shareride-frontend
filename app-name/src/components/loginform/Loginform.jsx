// src/LoginPage.js
import React, { useState } from 'react'
import "./loginform.css"
import { FaUser,FaLock } from "react-icons/fa";
const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form and error
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
            <FaUser />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
           <FaLock />
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#"> Forgot Password?</a>
        </div>
       {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
        <div className="registerlink">
          <p>Dont have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default Loginform;
