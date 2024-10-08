import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, isLoggedIn, logoutUser } from '../controllers/AuthController.jsx';

const Home = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div className="container" role="main">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="welcome-section">
          {user ? (
            <>
              <h1>Welcome, {user.name}!</h1>
              <p>We're glad to have you back.</p>
              <button onClick={handleLogout} className="btn" aria-label="Logout Button">
                Logout
              </button>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
