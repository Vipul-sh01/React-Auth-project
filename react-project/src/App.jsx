import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/login.jsx';
import Home from './components/homes.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsAuthenticated(loggedIn === 'true');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={isAuthenticated ? <Navigate to="/home" /> : <Register />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
        <Route path="/home" element={<ProtectedRoute component={Home} />} />
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/register" />} />
      </Routes>
    </Router>
  );
};

export default App;