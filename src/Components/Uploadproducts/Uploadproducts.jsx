import React, { useState } from 'react';
import './Uploadproducts.css';
import axios from 'axios';

const UploadServices = () => {
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState(''); // New state for cost
  const [contact, setContact] = useState('');
  const [doctor, setDoctor] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('service_name', service);
    formData.append('service_description', description);
    formData.append('cost',cost);
    formData.append('doctor_name', doctor);
    formData.append('doctor_contact', contact);
    if (file) {
      formData.append('service_photo', file);
    }

    try {
      const response = await axios.post(
        'https://davi3s.pythonanywhere.com/api/upload_service',
        formData
      );
      console.log('Service uploaded:', response.data);
      alert('Service uploaded successfully!');
      setService('');
      setDescription('');
      setCost('');
      setContact('');
      setDoctor('');
      setFile(null);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload service.');
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log('Selected file:', selectedFile);
    setFile(selectedFile);
  };

  return (
    <div className="upload-container">
      <h2>Upload a Medical Service</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="service">Service Name</label>
          <input
            type="text"
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            placeholder="e.g. Pediatric Consultation"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Service Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Briefly describe the service"
            rows="5"
            required
          ></textarea>
        </div>

        <div className='form-group'>
          <label htmlFor="cost">Service Cost (Ksh)</label>
          <input
            type="number"
            id='cost'
            onChange={(e) => setCost(e.target.value)}
            value={cost}
            placeholder="Enter the cost in Ksh"
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor="doctor">Enter Your Name</label>
          <input
            type="text"
            id='doctor'
            onChange={(e) => setDoctor(e.target.value)}
            value={doctor}
            required
            placeholder="Doctor's name"
          />
        </div>

        <div className='form-group'>
          <label htmlFor="contact">Enter Your Contact Info</label>
          <input
            type="tel"
            id='contact'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder='e.g 07xxxxxxxx'
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Upload Profile Picture / Certificates / Files</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            accept="image/*,.pdf,.doc,.docx"
          />
        </div>

        <button type="submit" className="upload-btn">Upload Service</button>
      </form>
    </div>
  );
};

export default UploadServices;
