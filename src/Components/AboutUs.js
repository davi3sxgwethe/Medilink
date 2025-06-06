import React from "react";
import "./AboutUs.css";
import heroImage from '../assets/images/medilink-hero.png';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={heroImage} alt="Medilink Hero" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Medilink</h1>
          <p className="hero-tagline">Connecting Healthcare, Seamlessly.</p>
        </div>
      </section>

      {/* Mission and Story */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Medilink, we believe healthcare should be accessible, secure, and
          intuitive. Our platform empowers doctors and patients to connect
          effortlessly, no matter the distance.
        </p>
        <p>
          From video consultations to managing appointments and health records,
          Medilink is redefining digital healthcare by placing care and
          convenience at the core of every interaction.
        </p>
      </section>

      {/* Team Spotlight (Optional) */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <p>
          We are a group of passionate engineers, clinicians, and innovators
          with a shared goal: to create a healthcare experience that feels as
          personal and powerful as it is professional.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h3>Join the Future of Healthcare</h3>
        <Link to="/signup/patient">
        <button className="cta-button">Get Started with Medilink</button>
        </Link>
      </section>
    </div>
  );
}

export default AboutUs;
