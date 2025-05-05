import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
        <div className="footer-text">
        <h3>Why Join Medilink?</h3>
          <p>
            Whether you're seeking expert advice, booking a consultation, or tracking your health journey, Medilink makes it seamless and secure. 
            With just a few clicks, you connect with licensed professionals ready to support your needs. 
            Don’t wait for tomorrow — <strong>register today</strong> and take your well-being into your own hands.
        </p>
      </div>

        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>

          <img src="images/icons8-medical-doctor-100.png" alt="" />
        </div>



        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@medilink.com</p>
          <p>Phone: +254 700 123 456</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Medilink. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
