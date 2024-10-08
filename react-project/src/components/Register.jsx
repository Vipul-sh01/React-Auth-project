import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';
import {
  validateEmail,
  validatePassword,
  checkIfUserExists,
  registerUser
} from '../controllers/RegisterController.jsx';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    const existingUser = checkIfUserExists(email);
    if (existingUser) {
      setError('This email is already registered. Please use a different email.');
      return;
    }
    registerUser(name, email, password);
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="form-container">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Register</button>
          </form>

          {error && <p className="error">{error}</p>}

          <div style={{ paddingTop: '20px', textAlign: 'center' }}>
            Already have an account? <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
