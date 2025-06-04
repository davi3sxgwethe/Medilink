import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUnapprovedDoctors();
  }, []);

  const fetchUnapprovedDoctors = async () => {
    try {
      const res = await axios.get('https://davi3s.pythonanywhere.com/api/unapproved_doctors');
      setDoctors(res.data);
    } catch (error) {
      setMessage('Failed to fetch unapproved doctors.');
    }
  };

  const approveDoctor = async (id) => {
    try {
      await axios.post(`https://davi3s.pythonanywhere.com/api/approve_doctor/${id}`);
      setMessage('Doctor approved successfully.');
      // Remove the approved doctor from the list
      setDoctors(doctors.filter((doc) => doc.id !== id));
    } catch (error) {
      setMessage('Failed to approve doctor.');
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Pending Doctor Approvals</h2>
      {message && <p className="admin-message">{message}</p>}
      {doctors.length === 0 ? (
        <p className="no-doctors">No pending approvals.</p>
      ) : (
        <ul className="doctor-list">
          {doctors.map((doctor) => (
            <li key={doctor.id} className="doctor-card">
              <div>
                <strong>{doctor.name}</strong><br />
                <span>{doctor.email}</span>
              </div>
              <button onClick={() => approveDoctor(doctor.id)} className="approve-btn">
                Approve
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
