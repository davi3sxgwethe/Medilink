import React, { useState } from 'react';

import './Signin'; // Import the CSS for styling

const SignInPage = () => {
  // State for managing input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add authentication logic here (e.g., check credentials)
    console.log('Signing in with', email, password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
    <div className="signin-container col-md-6">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group form-control card shadow justify-content-center py-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group form-control card shadow justify-content center py-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="signin-btn btn btn-outline bg-info mt-4">Sign In</button>
      </form>
    </div>
    </div>
  );
};

export default SignInPage;
