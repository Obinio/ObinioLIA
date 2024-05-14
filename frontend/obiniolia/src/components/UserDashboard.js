import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function UserDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state ? location.state.user : null;

  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Antag att användarens token lagras i localStorage
    navigate('/login');
  };

  if (!user) {
    return <div>You are not logged in. Please login to access your dashboard.</div>;
  }

  return (
    <div>
      <h1>Welcome to Your Dashboard, {user.name}!</h1>
      <p>This is a simple user dashboard page. Here you can see your profile info and manage your settings.</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default UserDashboard;
