import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './AdminDashboard.css'; // Importera CSS-filen

function AdminDashboard() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <div className="admin-documents">You are not logged in. Please login to access your dashboard.</div>;
  }

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <nav>
          <ul className="sidebar-nav">
            <li className="sidebar-nav-item"><Link to="/admin/users">Manage Users</Link></li>
            <li className="sidebar-nav-item"><Link to="/admin/documents">Manage Documents</Link></li>
            <li className="sidebar-nav-item"><Link to="/admin/add-fields">Add Fields to Document</Link></li>
            <li className="sidebar-nav-item"><Link to="/admin/upload">Upload Documents</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="admin-content">
        <h1>Welcome to the Admin Dashboard, {currentUser.username}!</h1>
        <p>This is a simple admin dashboard page. Here you can manage users and documents.</p>
      </main>
    </div>
  );
}

export default AdminDashboard;
