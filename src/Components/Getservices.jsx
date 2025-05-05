import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function GetServicesPage() {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://davi3s.pythonanywhere.com/api/get_services')
      .then((response) => {
        console.log('Full response:', response.data); // Debug full response
        const serviceList = response.data.services || response.data || []; // handle different structures
        setServices(serviceList);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });
  }, []);

  const filteredServices =
    selectedCategory === 'All'
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Available Medical Services</h2>

      <div className="d-flex justify-content-end mb-4">
        <select
          className="form-select w-auto"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Dental">Dental</option>
          <option value="General">General</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Specialist">Specialist</option>
        </select>
      </div>

      <div className="row">
        {Array.isArray(filteredServices) && filteredServices.map((service) => {
          console.log('Service:', service);
          return (
            <div className="col-md-3 mb-4" key={service.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={`https://davi3s.pythonanywhere.com/static/images/${service.image}`}
                  className="card-img-top"
                  alt={service.title}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                  <p className="text-muted mb-1">
                    <strong>Doctor:</strong> {service.doctor_name}
                  </p>
                  <p className="text-muted">
                    <strong>Contact:</strong> {service.contact}
                  </p>
                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => navigate('/makepayment', { state: { service } })}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
