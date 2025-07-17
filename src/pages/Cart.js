import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      <h2>Your Cart 🛒</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div style={styles.itemsContainer}>
            {cartItems.map((item, index) => (
              <div key={index} style={styles.itemCard}>
                <img src={item.image} alt={item.name} style={styles.image} />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <p style={styles.category}>{item.category}</p>
                  <button
                    style={styles.removeBtn}
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3>Total: ₹{total}</h3>
          <Link to="/checkout">
            <button style={styles.checkoutBtn}>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center'
  },
  itemsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  itemCard: {
    width: '300px',
    display: 'flex',
    alignItems: 'center',
    margin: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    marginRight: '10px',
    borderRadius: '8px'
  },
  removeBtn: {
    padding: '6px 12px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '5px'
  },
  checkoutBtn: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  category: {
    fontSize: '0.85rem',
    color: '#666'
  }
};

export default Cart;
