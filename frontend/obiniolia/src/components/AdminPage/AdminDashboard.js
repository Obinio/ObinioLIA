import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Skapa en CSS-fil för styling

function AdminDashboard() {
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
        {/* Innehåll som ändras baserat på navigationsval kommer att laddas här */}
        <h1>Welcome to the Admin Dashboard</h1>
      </section>
    </div>
  );
}

export default AdminDashboard;
