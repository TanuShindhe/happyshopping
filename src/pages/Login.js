import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to HappyShopping 🛍️</h1>
      <p style={styles.sub}>Your favorite fashion store</p>
      <button style={styles.button} onClick={handleEnter}>
        Enter Store
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(to right, #ffecd2, #fcb69f)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '3rem',
    color: '#2c3e50',
    marginBottom: '10px'
  },
  sub: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer'
  }
};

export default Login;
