import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DoctorSignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    specialty: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Only new addition

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://davi3s.pythonanywhere.com/api/doctor_signup', form);
      setMessage(res.data.success || 'Sign up successful!');
      navigate('/doctor-dashboard'); // Only new addition
    } catch (error) {
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Doctor Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="specialty" placeholder="Specialty" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p style={{ marginTop: '10px', color: 'green' }}>{message}</p>}
    </div>
  );
};

export default DoctorSignUp;
