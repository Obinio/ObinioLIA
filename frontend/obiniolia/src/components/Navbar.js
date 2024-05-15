import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logout();
      navigate('/');
    }
  };

  return (
    <nav className="navbar">
      <ul>
        {currentUser ? (
          <>
            <li>
              <button disabled>Logged in as {currentUser.role}</button>
            </li>
            <li>
              <button onClick={handleLogout}>Sign out</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button onClick={() => navigate('/login')}>Login</button>
            </li>
            <li>
              <button onClick={() => navigate('/RegistrationForm')}>Register</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
