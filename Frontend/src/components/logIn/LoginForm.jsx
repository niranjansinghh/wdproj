import React, { useState } from "react";
import "./LoginForm.css"; // Reusing the same CSS for simplicity
import { useMutation } from '@apollo/client'; // Import useMutation
import { LOGIN_MUTATION } from '../mutations'; // Import the LOGIN_MUTATION

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [login] = useMutation(LOGIN_MUTATION); // Initialize the login mutation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => { // Make this function async
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const { data } = await login({ variables: { email: formData.email, password: formData.password } }); // Call the login mutation
      console.log('Login successful:', data);
      alert('Login successful!'); // Handle successful login (e.g., store token, redirect)
    } catch (error) {
      console.error('Login error:', error);
      alert(`Login failed: ${error.message}`); // Handle error
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
