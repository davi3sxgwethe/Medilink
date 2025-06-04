import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminSignIn.css';

const AdminSignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://davi3s.pythonanywhere.com/api/admin_signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        navigate('/admin-dashboard'); // redirect after successful login
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      console.error('Admin login error:', err);
      setError('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="admin-signin-container">
      <form className="admin-signin-form" onSubmit={handleSignIn}>
        <h2>Admin Sign In</h2>
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default AdminSignIn;
