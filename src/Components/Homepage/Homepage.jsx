import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import Testimonials from '../Testimonials/Testimonials';
import MetaBalls from '../MetaBalls';

const Homepage = () => {
  return (
    <div className="homepage" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* MetaBalls Background */}
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

      {/* Actual Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-left">
            <h1>
              Your Health, <span className="highlight">Your Control</span>
            </h1>
            <p>
              Medilink brings expert care to your fingertips. Whether you need a quick consultation,
              ongoing health monitoring, or a second opinion — our licensed doctors are here for you, anytime.
            </p>
            <div className="hero-buttons">
              <Link to="/signup/patient">
                <button className="btn primary text-light">Get Started</button>
              </Link>
              <Link to="/demo">
                <button className="btn outline text-light">Schedule a Demo</button>
              </Link>
            </div>
          </div>
          <div className="hero-right">
            <img
              src="/images/Homepage.avif"
              alt="Doctor consultation"
              className="hero-image"
            />
          </div>
        </section>

        {/* NEW MEDICAL IMAGE + DESCRIPTION SECTION */}
        <section className="info-section">
          <div className="info-image">
            <img
              src="/images/doctor.avif"
              alt="Telemedicine use"
              className="info-img"
            />
          </div>
          <div className="info-text">
            <h2>Access Healthcare With Ease</h2>
            <p>
              With Medilink, all you need is a device and internet connection.
              Our platform is optimized for low-bandwidth environments...
            </p>
            <p>
              Join thousands who have already experienced...
            </p>
          </div>
        </section>

        <Testimonials />

        {/* SHADOW CARD SECTION */}
        <section className="cards-section">
          <div className="card">
            <h2>Instant Access</h2>
            <p>Start a virtual consultation with a few clicks.</p>
          </div>
          <div className="card">
            <h2>Secure Platform</h2>
            <p>Your data is protected with top-tier security.</p>
          </div>
          <div className="card">
            <h2>Reliable Support</h2>
            <p>24/7 assistance from our care team.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
