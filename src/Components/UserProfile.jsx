import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedDoctor = localStorage.getItem('doctor');
    const storedPatient = localStorage.getItem('user');

    if (storedDoctor) {
      const doctor = JSON.parse(storedDoctor);
      setUser({ ...doctor, role: 'doctor' });
    } else if (storedPatient) {
      const patient = JSON.parse(storedPatient);
      setUser({ ...patient, role: 'patient' });
    }
  }, []);

  const toggleDropdown = () => {
    if (!user) {
      alert('Please sign in to access your profile.');
      const lastRole = localStorage.getItem('lastVisitedRole') || 'doctor';
      navigate(`/signin/${lastRole}`);
      return;
    }
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('doctor');
    localStorage.removeItem('user');
    setUser(null);
    setDropdownOpen(false);
    navigate('/');
  };

  const handleChangePassword = () => {
    navigate('/change-password');
  };

  return (
    <div className="user-profile" onClick={toggleDropdown}>
      <FaUserCircle size={28} className="user-icon" />
      {dropdownOpen && user && (
        <div className="profile-dropdown">
          <p><strong>Username:</strong> {user.username || user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <button onClick={handleChangePassword}>Change Password</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
