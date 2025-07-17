import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import products from './data/productData';
import ProductCard from './components/ProductCard';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchPrice =
      selectedPrice === "All" ||
      (selectedPrice === "below2000" && product.price < 2000) ||
      (selectedPrice === "2000to3000" && product.price >= 2000 && product.price <= 3000) ||
      (selectedPrice === "above3000" && product.price > 3000);

    return matchCategory && matchPrice;
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default redirect to login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Home Page */}
          <Route
            path="/home"
            element={
              <>
                {/* Navbar */}
                <nav style={{
                  marginBottom: '20px',
                  padding: '10px',
                  backgroundColor: '#6dd5ed',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  color: '#fff'
                }}>
                  <h2 style={{ margin: 0 }}>🛍️ HappyShopping</h2>
                  <div>
                    <Link to="/home" style={navStyle}>Home</Link>
                    <Link to="/cart" style={navStyle}>Cart ({cartItems.length})</Link>
                    <Link to="/checkout" style={navStyle}>Checkout</Link>
                  </div>
                </nav>

                {/* Filters */}
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <label>Category: </label>
                  <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                    <option value="Jackets">Jackets</option>
                  </select>

                  <label style={{ marginLeft: '20px' }}>Price: </label>
                  <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
                    <option value="All">All</option>
                    <option value="below2000">Below ₹2000</option>
                    <option value="2000to3000">₹2000 - ₹3000</option>
                    <option value="above3000">Above ₹3000</option>
                  </select>
                </div>

                {/* Product Grid */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {filteredProducts.map((item) => (
                    <ProductCard key={item.id} product={item} addToCart={addToCart} />
                  ))}
                </div>
              </>
            }
          />

          {/* Cart Page */}
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />

          {/* Checkout Page */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

const navStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
  fontWeight: 'bold'
};

export default App;
