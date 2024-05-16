import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import './UserDashboard.css'; // Lägg till CSS-filen för UserDashboard-stilar här

function UserDashboard() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <div>You are not logged in. Please login to access your dashboard.</div>;
  }

  return (
    <div className="user-dashboard">
      <div className="sidebar">
        <ul>
          <li className="user-dashboard-nav-item"><Link to="/user/documents">See Documents</Link></li>
          <li className="user-dashboard-nav-item"><Link to="/user/information">Information</Link></li>
          <li className="user-dashboard-nav-item"><Link to="/user/settings">Settings</Link></li>
        </ul>
      </div>
      <div className="content">
        <h1>Welcome to Your Dashboard, {currentUser.username}!</h1>
        <p>This is a simple user dashboard page. Here you can see your profile info and manage your settings.</p>
      </div>
    </div>
  );
}

export default UserDashboard;
