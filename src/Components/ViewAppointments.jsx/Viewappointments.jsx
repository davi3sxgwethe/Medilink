import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Viewappointments.css';

const ViewAppointments = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const doctorName = localStorage.getItem('doctorName');

  const handleBack = () => {
    navigate('/doctor-dashboard');
  };

  useEffect(() => {
    if (!doctorName) {
      setError('Doctor name not found.');
      setLoading(false);
      return;
    }

    fetch(`http://localhost:5000/api/appointments/${doctorName}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.appointments) {
          setAppointments(data.appointments);
        } else {
          setError('No appointments found.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load appointments.');
        setLoading(false);
      });
  }, [doctorName]);

  return (
    <div className="appointments-page">
      <div className="appointments-card">
        <h2>Your Appointments</h2>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Contact</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, index) => (
                <tr key={index}>
                  <td>{appt.patient_name}</td>
                  <td>{appt.patient_contact}</td>
                  <td>{appt.appointment_date}</td>
                  <td>{appt.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
      </div>
    </div>
  );
};

export default ViewAppointments;
