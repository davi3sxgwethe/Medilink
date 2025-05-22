import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import UserProfileDropdown from '../UserProfileDropdown';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Medilink</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/get-services">Get Services</Link></li>
        {/* <li><Link to="/uploadservices">Upload Service</Link></li> */}
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <UserProfileDropdown/>
      </ul>
    </nav>
  );
};

export default Navbar;
