import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn');

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;