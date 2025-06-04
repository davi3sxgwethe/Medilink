import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PatientSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://davi3s.pythonanywhere.com/api/patient_signin', {
        email,
        password
      });

      if (res.data.success) {
        // ✅ Store user credentials in localStorage
        localStorage.setItem('user', JSON.stringify({
          username: res.data.name || '', // Adjust based on actual response fields
          email: res.data.email || email,
          token: res.data.token // Optional
        }));

        setMessage(res.data.success);
        navigate('/get-services');
      } else {
        setMessage('Unexpected response.');
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2 className="auth-title">Patient Sign In</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="auth-button" type="submit">Sign In</button>
        </form>
        {message && <p className="auth-message" style={{ color: 'red' }}>{message}</p>}
      </div>
    </div>
  );
};

export default PatientSignIn;
