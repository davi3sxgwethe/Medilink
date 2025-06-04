import React from "react";
import "./Contactus.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="h1">Contact Us</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <h2>Member Support</h2>
          <p>
            Reach out to us and one of our Customer Support Representatives will
            follow up with you. Or log into the app and Message Your Care Team.
          </p>
          <p>
            <strong>1-800-997-6196</strong>
          </p>
          <p>
            <a href="mailto:support@includedhealth.com">
              support@includedhealth.com
            </a>
          </p>
        </div>

        <div className="contact-card">
          <h2>Request a Demo</h2>
          <p>
            Doctor On Demand is now part of Included Health.{" "}
            <a href="#">Request a demo</a> to learn more about how our solutions
            are helping employers, health plans, consultants and more.
          </p>
        </div>

        <div className="contact-card">
          <h2>Call Support</h2>
          <p>
            Need immediate support? Call our Customer Support Team, they’ll be
            happy to help.
          </p>
          <p>
            <strong>Toll Free: (800) 997-6196</strong>
          </p>
          <p>
            <strong>TTY: 711</strong>
          </p>
        </div>

        <div className="contact-card">
          <h2>Email Us</h2>
          <p>
            For media relations and other inquiries, please email us at one of
            the addresses below.
          </p>
          <p>
            <strong>Media inquiries:</strong>{" "}
            <a href="mailto:press@includedhealth.com">
              press@includedhealth.com
            </a>
          </p>
          <p>
            <strong>Partnership inquiries:</strong>{" "}
            <a href="mailto:partnerships@includedhealth.com">
              partnerships@includedhealth.com
            </a>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="contact-images">
        <img src="/images/daktari.webp" alt="Contact illustration 1" />
        <img src="/images/dakatri2.webp" alt="Contact illustration 2" />
      </div>

      <div className="contact-buttons">
        <button className="primary-btn">See a doctor now</button>
        <button className="secondary-btn">Get the app</button>
      </div>
    </div>
  );
};

export default ContactUs;