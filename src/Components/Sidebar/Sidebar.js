import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaBars, FaTimes, FaHome, FaUserMd, FaStethoscope, FaEnvelope, FaSignInAlt,
  FaAmericanSignLanguageInterpreting,
  FaHospital
} from 'react-icons/fa';
import './Sidebar.css';
import { Icon } from 'lucide-react';


function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const menuItems = [
    { icon: <FaSignInAlt/>,label:'Admin login⚠️',path:'/adminpage'},
    { icon: <FaStethoscope />, label: 'Services', path: '/get-services' },
    { icon: <FaUserMd />, label: 'Dashboard', path: '/doctor-dashboard' },
    { icon: <FaHome/>, label:'Emergency Help',path:'/nearby-hospitals'},
    { icon: <FaSignInAlt />, label: 'Sign In', path: 'signin/patient' },
    { icon: <FaAmericanSignLanguageInterpreting/>,label: 'Chatbot',path:'/chatbot' },
    { icon: <FaEnvelope/>,label:'Articles',path: '/articles'},
    { icon: <FaHospital/>,label:'AboutUs',path:'/aboutus'}
    
    
  ];

  return (
    <>
      {/* Hamburger button always visible */}
      <button
        className="sidebar-hamburger"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      {/* Sidebar panel */}
      <nav
        ref={sidebarRef}
        className={`sidebar ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="sidebar-header">
          <button
            className="sidebar-toggle"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `menu-item ${isActive ? 'active' : ''}`
                }
                onClick={() => setIsOpen(false)} // Close sidebar on navigation
              >
                {item.icon}
                <span className="menu-text">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="profile-section">
          <img
            className="profile-picture"
            src={`${process.env.PUBLIC_URL}/images/download.jpg`}
            alt="Profile"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `${process.env.PUBLIC_URL}/davies.jpg`;
            }}
          />
          <div className="profile-details">
            <p className="profile-name">Kavya Balla</p>
            <p className="profile-role">Web Developer</p>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && <div className="sidebar-backdrop" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}

export default Sidebar;
