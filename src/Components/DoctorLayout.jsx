// DoctorLayout.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './DoctorLayout.css';

const DoctorLayout = ({ children }) => {
  return (
    <div className="doctor-dashboard">
      <aside className="sidebar">
        <h2>Medilink</h2>
        <nav>
          <ul>
            <li><NavLink to="/dashboard" activeclassname="active">Dashboard</NavLink></li>
            <li><NavLink to="/viewappointments" activeclassname="active">Appointments</NavLink></li>
            <li><NavLink to="/patients" activeclassname="active">Patients</NavLink></li>
            <li><NavLink to="/messages" activeclassname="active">Messages</NavLink></li>
            <li><NavLink to="/signin/doctor" activeclassname="active">Logout</NavLink></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">Doctor Dashboard</header>
        <div className="page-content">{children}</div>
      </main>
    </div>
  );
};

export default DoctorLayout;
