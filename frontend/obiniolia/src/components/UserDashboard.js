import React from 'react';
import { useLocation } from 'react-router-dom';

function UserDashboard() {
  const location = useLocation();
  const user = location.state ? location.state.user : null;

  if (!user) {
    return <div>You are not logged in. Please login to access your dashboard.</div>;
  }

  return (
    <div>
      <h1>Welcome to Your Dashboard, {user.username}!</h1>
      <p>This is a simple user dashboard page. Here you can see your profile info and manage your settings.</p>
    </div>
  );
}

export default UserDashboard;
