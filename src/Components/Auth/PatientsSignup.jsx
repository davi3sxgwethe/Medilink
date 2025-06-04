import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css'; // Add styling here

const PatientSignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://davi3s.pythonanywhere.com/api/patient_signup', form);

      // ✅ Store user credentials in localStorage
      localStorage.setItem('user', JSON.stringify({
        username: response.data.name || form.name,
        email: response.data.email || form.email,
        token: response.data.token // Optional, only if your backend provides it
      }));

      setMessage(response.data.success || 'Signup successful!');
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('Signup failed. Please try again.');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2 className="auth-title">Create Account</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>Email address</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <label>Full Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth-button">Continue</button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-footer">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default PatientSignUp;
