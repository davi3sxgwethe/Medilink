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
        if (res.data.user && res.data.user.is_approved === false) {
          setMessage('Your account has not been approved by the admin yet.');
        } else {
          // ✅ Store user credentials in a consistent format
          localStorage.setItem('user', JSON.stringify({
            username: res.data.user.name,
            email: res.data.user.email,
            token: res.data.token // optional if available
          }));
          setMessage(res.data.success);
          navigate('/doctor-dashboard');
        }
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
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2 className="auth-title">Doctor Sign In</h2>
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

export default DoctorSignIn;
