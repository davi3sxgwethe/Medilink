import React, { useState } from 'react';
import axios from 'axios';
import './Makepayment.css'; // 👈 Import the CSS file

const MakePayment = () => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
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

    try {
      const response = await axios.post("https://davi3s.pythonanywhere.com/api/mpesa_payment"
, formData);
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
            placeholder="Enter amount"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>

      {status && <p className={`status-message ${loading ? 'loading' : 'done'}`}>{status}</p>}
    </div>
  );
};

export default MakePayment;
