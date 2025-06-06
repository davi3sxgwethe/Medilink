import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import UserProfile from '../UserProfile'; 

const Navbar = () => {
  const location = useLocation();
  const [showSignInDropdown, setShowSignInDropdown] = useState(false);
  const [showSignUpDropdown, setShowSignUpDropdown] = useState(false);

  const toggleDropdown = (type) => {
    if (type === 'signin') {
      setShowSignInDropdown((prev) => !prev);
      setShowSignUpDropdown(false);
    } else {
      setShowSignUpDropdown((prev) => !prev);
      setShowSignInDropdown(false);
    }
  };

  return (
    <nav className="modern-navbar">
      <div className="navbar-logo">
        <img src="/images/ChatGPT.png" alt="Medilink Icon" className="navbar-icon" />
        <Link to="/">Medilink</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link
            to="/"
            className={`nav-btn ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/get-services"
            className={`nav-btn ${location.pathname === '/get-services' ? 'active' : ''}`}
          >
            Get Services
          </Link>
        </li>

        {/* Sign In Dropdown */}
        <li className="dropdown-parent">
          <button
            className={`nav-btn ${showSignInDropdown ? 'active' : ''}`}
            onClick={() => toggleDropdown('signin')}
          >
            Sign In ▾
          </button>
          {showSignInDropdown && (
            <div className="auth-dropdown">
              <Link to="/signin/patient" className="dropdown-item">Patient</Link>
              <Link to="/signin/doctor" className="dropdown-item">Doctor</Link>
            </div>
          )}
        </li>

        {/* Sign Up Dropdown */}
        <li className="dropdown-parent">
          <button
            className={`nav-btn ${showSignUpDropdown ? 'active' : ''}`}
            onClick={() => toggleDropdown('signup')}
          >
            Get Started ▾
          </button>
          {showSignUpDropdown && (
            <div className="auth-dropdown">
              <Link to="/signup/patient" className="dropdown-item">Patient</Link>
              <Link to="/signup/doctor" className="dropdown-item">Doctor</Link>
            </div>
          )}
        </li>

        <li>
          <Link
            to="/contactus"
            className={`nav-btn ${location.pathname === '/contactus' ? 'active' : ''}`}
          >
            Contact Us
          </Link>
        </li>

        {/* 🔹 Add Profile Icon at the far right */}
        <li>
          <UserProfile />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
