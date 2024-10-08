import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';
import {
  validateEmail,
  validatePassword,
  loginUser,
  setUserSession
} from '../controllers/login.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage('Password must be exactly 6 digits long.');
      return;
    }

    const user = loginUser(email, password);
    if (user) {
      setUserSession(user);
      navigate('/home');
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="container" role="main">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              aria-label="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              aria-label="Password"
              placeholder="Password (6 digits)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" aria-label="Login Button">Login</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div style={{ paddingTop: '20px', textAlign: 'center' }}>
            Don't have an account? <a href="/register">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
