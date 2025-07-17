import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
        />
      </div>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p style={styles.category}>{product.category}</p>
      
      {/* ✅ Button with debug log */}
      <button
        style={{ ...styles.button, zIndex: 999, position: 'relative' }}
        onClick={() => {
          console.log("Button clicked for:", product.name);
          addToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    width: '220px',
    margin: '15px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  imageWrapper: {
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: '10px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  },
  button: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  category: {
    fontSize: '0.9rem',
    color: '#666'
  }
};

export default ProductCard;
