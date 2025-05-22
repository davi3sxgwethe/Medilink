import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorDashboard.css';
import { FaUserMd, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
import DoctorLayout from '../DoctorLayout';

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString();

  const goToViewAppointments = () => {
    navigate('/viewappointments');
  };

  const handleLogout = () => {
    navigate('/signin/doctor');
  };

  const goToUploadServices = () => {
    navigate('/uploadservices');
  };

  return (
    <DoctorLayout>
      <div className="dashboard-card">
        <h1>Welcome, Doctor 👨‍⚕️</h1>
        <p className="date-info">Today is {today}</p>
        <p className="subtext">Manage your services and view appointments here.</p>

        <div className="dashboard-buttons">
          <button onClick={goToUploadServices} className="dashboard-button">
            <FaUserMd /> &nbsp; Upload Services
          </button>

          <button onClick={goToViewAppointments} className="dashboard-button">
            <FaCalendarAlt /> &nbsp; View Appointments (coming soon)
          </button>

          <button onClick={handleLogout} className="dashboard-button logout">
            <FaSignOutAlt /> &nbsp; Logout
          </button>
        </div>
      </div>
    </DoctorLayout>
  );
}; 

export default DoctorDashboard;
