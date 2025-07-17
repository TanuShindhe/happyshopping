import React, { useState } from 'react';

function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Checkout</h2>

      {orderPlaced ? (
        <p style={{ color: 'green' }}>
          ✅ Thank you, {formData.name}! Your order has been placed.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Name:</label><br />
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Email:</label><br />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Address:</label><br />
            <textarea name="address" value={formData.address} onChange={handleChange} required />
          </div>

          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
