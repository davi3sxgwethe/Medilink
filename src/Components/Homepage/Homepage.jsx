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
          <div className="feature-card">
            <h3>Connect With Trusted Medical Services Near You</h3>
            <p>Medilink helps patients access verified healthcare providers and allows service providers to reach more clients seamlessly.</p>
          </div>
          <div className="feature-card">
            <h3>Your Gateway to Reliable Healthcare Services</h3>
            <p>Discover and connect with certified medical professionals, or showcase your services to a broader audience through Medilink.</p>
          </div>
          <div className="feature-card">
            <h3>Find the Care You Need, When You Need It</h3>
            <p>Medilink bridges the gap between patients and trusted medical experts, making healthcare more accessible for everyone.</p>
          </div>
          <div className="feature-card">
            <h3>Take Control of Your Healthcare Journey</h3>
            <p>Whether you're seeking medical services or offering them, Medilink puts powerful tools at your fingertips.</p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Homepage;
