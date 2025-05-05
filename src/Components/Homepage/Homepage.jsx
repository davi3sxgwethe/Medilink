import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Medilink</h1>
          <p>Connect with doctors, book consultations, and manage your healthcare easily.</p>
          <Link to="/signup">
            <button className="cta-button">Sign Up</button>
          </Link>
        </div>
      </header>

      <section className="features-section">
        <h2>What You Can Do</h2>
        <div className="features">
          <Link to="/signin" className="feature-card-link">
            <div className="feature-card">
              <h3>Sign In</h3>
              <p>Access your dashboard and continue from where you left off.</p>
            </div>
          </Link>
          <div className="feature-card">
            <h3>View Services</h3>
            <p>Explore available doctors and health services with ease.</p>
          </div>
          <div className="feature-card">
            <h3>Make Payments</h3>
            <p>Complete consultation bookings through secure payment simulation.</p>
          </div>
          <div className="feature-card">
            <h3>Upload Services</h3>
            <p>Doctors can add their expertise and availability for patient visibility.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
