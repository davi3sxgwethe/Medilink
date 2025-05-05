import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthChoice.css';

const AuthChoice = ({ type }) => {
  const navigate = useNavigate();

  return (
    <div className="auth-choice-container">
      <h2>{type === 'signin' ? 'Sign In' : 'Sign Up'} as:</h2>
      <div className="role-buttons">
        <button onClick={() => navigate(`/${type}/patient`)} className="auth-btn">
          Patient
        </button>
        <button onClick={() => navigate(`/${type}/doctor`)} className="auth-btn">
          Doctor
        </button>
      </div>
    </div>
  );
};

export default AuthChoice;
