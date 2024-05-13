import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserDashboard({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Här skulle du rensa användarinformation från state eller global store
    // och utföra andra rengöringsåtgärder som nödvändigt
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to Your Dashboard, {user ? user.name : 'User'}!</h1>
      <p>This is a simple user dashboard page. Here you can see your profile info and manage your settings.</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default UserDashboard;
