import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './UserProfileDropdown.css'; // You’ll style it next

const UserProfileDropdown = ({ user, onLogout, onChangePassword }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <div className="profile-container">
      <div className="profile-icon" onClick={toggleDropdown}>
        <FaUserCircle size={28} />
        <span className="profile-info">
          {user.name} ({user.role})
        </span>
      </div>

      {open && (
        <div className="dropdown-menu">
          <button onClick={onChangePassword}>Change Password</button>
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
