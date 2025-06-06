import React, { useState } from 'react';
import axios from 'axios';

const DoctorSignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    specialty: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://davi3s.pythonanywhere.com/api/doctor_signup', form);

      // ✅ Store user credentials in localStorage
      localStorage.setItem('user', JSON.stringify({
        username: res.data.name || form.name,
        email: res.data.email || form.email,
        token: res.data.token // optional
      }));

      setMessage('Sign up successful. Your account is pending admin approval.');
      // No redirect until approval is granted
    } catch (error) {
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2 className="auth-title">Doctor Sign Up</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input name="password" type="password" value={form.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Specialty</label>
            <input name="specialty" value={form.specialty} onChange={handleChange} required />
          </div>
          <button className="auth-button" type="submit">Sign Up</button>
        </form>
        {message && <p className="auth-message">{message}</p>}
      </div>
    </div>
  );
};

export default DoctorSignUp;
