import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DoctorSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://davi3s.pythonanywhere.com/api/doctor_signin', {
        email,
        password
      });

      if (res.data.success) {
        setMessage(res.data.success);
        navigate('/uploadservices'); // Navigate on success
      } else {
        setMessage('Unexpected response');
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
    <div className="auth-form-container">
      <h2>Doctor Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      {message && <p style={{ marginTop: '10px', color: 'red' }}>{message}</p>}
    </div>
  );
};

export default DoctorSignIn;
