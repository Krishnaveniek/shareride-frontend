import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import './registrationform.css';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
    // Add your form submission logic here, e.g., send the data to an API
  };

  const handleGoogleLogin = (credentialResponse) => {
    console.log(credentialResponse);
    // Handle successful Google login here
  };

  return (
    <div className='parent-container'>

    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className='user-input'
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className='user-input'
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className='user-input'
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {/* <div className="continue-with-google">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => {
            console.log('Google login failed');
          }}
        />
      </div> */}
         <div className="registerlink">
          <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
    </div>
    </div>
  );
};

export default RegistrationPage;