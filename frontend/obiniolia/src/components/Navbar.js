import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (currentUser) {
      setRole(currentUser.role);
    } else {
      setRole(null);
    }
  }, [currentUser]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logout();
      navigate('/');
    }
  };

  const handleHomeClick = () => {
    if (role === 'Admin') {
      navigate('/AdminDashboard');
    } else {
      navigate('/UserDashboard');
    }
  };

  return (
    <nav className="navbar">
      <ul>
        {currentUser ? (
          <li>
            <button onClick={handleHomeClick}>
              {role === 'Admin' ? 'AdminDashboard' : 'UserDashboard'}
            </button>
          </li>
        ) : (
          <li>
            <button onClick={() => navigate('/')}>Home</button>
          </li>
        )}
        {currentUser && (
          <>
            <li>
              <span disabled>Logged in as {role}</span>
            </li>
            <li>
              <button onClick={handleLogout}>Sign out</button>
            </li>
          </>
        )}
        {!currentUser && (
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
