import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  const location = useLocation();
  const user = location.state ? location.state.user : null;

  console.log("User data received:", user);  // Lägg till denna loggning för att se vad som hämtas

  if (!user) {
    return <div>Please log in to view this page.</div>;
  }

  return (
    <div className="AdminDashboard">
      <aside className="sidebar">
        <ul>
          <li><Link to="/admin/users">See Registered Users</Link></li>
          <li><Link to="/admin/documents">Documents</Link></li>
          <li><Link to="/admin/add-fields">Add Fields to Document</Link></li>
          <li><Link to="/admin/upload">Upload</Link></li>
        </ul>
      </aside>
      <section className="content">
        <h1>Welcome to the Admin Dashboard, {user.username}!</h1>
      </section>
    </div>
  );
}

export default AdminDashboard;
