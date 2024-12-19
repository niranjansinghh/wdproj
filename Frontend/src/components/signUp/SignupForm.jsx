import React, { useState } from "react";
import "./SignupForm.css";
import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '../mutations'; // Adjust the import path as necessary

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup] = useMutation(SIGNUP_MUTATION);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert('Username, email, and password are required.');
      return;
    }
    try {
      const { data } = await signup({ variables: { username, email, password } });
      console.log('Signup successful:', data);
      alert('Signup successful!');
    } catch (error) {
      console.error('Signup error:', error);
      alert(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          {/* Username Field */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
