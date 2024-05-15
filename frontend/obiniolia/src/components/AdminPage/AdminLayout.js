import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../Navbar';  // Använd den befintliga Navbar om den ska visas också
import './AdminDashboard.css';  // Säkerställ att alla CSS-stilar gäller

function AdminLayout() {
  return (
    <div className="admin-dashboard">
      <Navbar />
      <aside className="sidebar">
        <ul>
          <li><Link to="/admin/users">See Registered Users</Link></li>
          <li><Link to="/admin/documents">Documents</Link></li>
          <li><Link to="/admin/add-fields">Add Fields to Document</Link></li>
          <li><Link to="/admin/upload">Upload</Link></li>
        </ul>
      </aside>
      <section className="content">
        <Outlet />  // Plats för innehåll från undersidorna
      </section>
    </div>
  );
}

export default AdminLayout;
