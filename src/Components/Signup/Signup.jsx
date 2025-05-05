import React, { useState } from 'react';
import './Signup'; // Make sure to create this CSS file
// import 'import bootstrap/dist/css/bootstrap.min.css';

const SignUpPage = () => {
  // State for managing input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-up logic here (e.g., form validation, API call)
    console.log('Signing up with', name, email, password, confirmPassword);
  };

  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
    <div className="signup-container col-md-6 ">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group form-control card shadow py-2">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>
        <br />

        <div className="form-group form-control card shadow py-2">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <br />

        <div className="form-group form-control card shadow py-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a password"
            required
          />
        </div>

        <br />

        <div className="form-group form-control py-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        

      

        <br />

        <button type="submit" className="signup-btn btn btn-outline bg-info">Sign Up</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default SignUpPage;
