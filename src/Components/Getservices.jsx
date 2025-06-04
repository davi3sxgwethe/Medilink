import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './GetServices.css';
import MetaBalls from './MetaBalls';

export default function GetServicesPage() {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://davi3s.pythonanywhere.com/api/get_services')
      .then((response) => {
        const serviceList = response.data.services || response.data || [];
        setServices(serviceList);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });
  }, []);

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBookNow = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleConfirmBooking = () => {
    setShowModal(false);
    navigate('/makepayment', { state: { service: selectedService } });
  };

  return (
    <div className="services-page" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* MetaBalls background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <MetaBalls
          color="#0abde3"
          cursorBallColor="#ffffff"
          cursorBallSize={2}
          ballCount={20}
          animationSize={30}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.25}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="header-section">
          <h2>Discover Medical Services</h2>
          <p>Browse and book services from our top-rated doctors</p>
        </div>

        <div className="controls">
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Dental">Dental</option>
            <option value="General">General</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Specialist">Specialist</option>
          </select>
        </div>

        <div className="services-grid">
          {filteredServices.map((service) => (
            <div className="service-card" key={service.id}>
              <img
                src={`https://davi3s.pythonanywhere.com/static/images/${service.image}`}
                alt={service.title}
                className="service-image"
              />
              <div className="card-content">
                <h3>{service.title}</h3>
                <span className="badge">{service.category}</span>
                <p>{service.description}</p>
                <div className="service-info">
                  <span><strong>Doctor:</strong> {service.doctor_name}</span>
                  <span><strong>Contact:</strong> {service.contact}</span>
                  <span><strong>Cost:</strong> KES {service.cost}</span>
                </div>

                <button onClick={() => handleBookNow(service)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Confirmation Modal */}
        {showModal && selectedService && (
          <div className="booking-modal">
            <div className="modal-content">
              <h3>Confirm Booking</h3>
              <p><strong>Service:</strong> {selectedService.title}</p>
              <p><strong>Doctor:</strong> {selectedService.doctor_name}</p>
              <p><strong>Contact:</strong> {selectedService.contact}</p>
              <p><strong>Description:</strong> {selectedService.description}</p>
              <div className="modal-buttons">
                <button onClick={handleConfirmBooking}>Confirm & Pay</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
