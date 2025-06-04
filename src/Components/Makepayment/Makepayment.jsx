import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Makepayment.css';

const MakePayment = () => {
  const location = useLocation();
  const service = location.state?.service;

  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState(service?.cost || '');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!phone || !amount) {
      setStatus("Phone number and amount are required.");
      return;
    }

    setLoading(true);
    setStatus("Processing payment...");

    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("amount", amount);
    formData.append("service_id", service?.id);

    try {
      const response = await axios.post(
        "https://davi3s.pythonanywhere.com/api/mpesa_payment",
        formData
      );
      setStatus(response.data.message || "Payment initiated.");
    } catch (error) {
      console.error(error);
      setStatus("Payment failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Make Payment</h2>

      {service ? (
        <div className="service-summary">
          <h3>Service Summary</h3>
          <div className="summary-content">
            <img
              src={`https://davi3s.pythonanywhere.com/static/images/${service.image}`}
              alt="Doctor"
              className="doctor-photo"
            />
            <div className="summary-details">
              <p><strong>Service:</strong> {service.title}</p>
              <p><strong>Doctor:</strong> {service.doctor_name}</p>
              <p><strong>Contact:</strong> {service.contact}</p>
              <p><strong>Price:</strong> KES {service.cost || 'N/A'}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="warning">No service information found. Please go back and select a service.</p>
      )}

      <form onSubmit={handlePayment} className="payment-form">
        <div className="form-group">
          <label>Phone Number (e.g. 2547xxxxxxxx):</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Enter phone number"
          />
        </div>

        <div className="form-group">
          <label>Amount (KES):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            disabled
          />
        </div>

        <button type="submit" disabled={loading} className="pay-button">
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>

      {status && <p className={`status-message ${loading ? 'loading' : 'done'}`}>{status}</p>}
    </div>
  );
};

export default MakePayment;
