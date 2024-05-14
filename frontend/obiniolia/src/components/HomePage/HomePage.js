import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'; // Se till att detta är importerat
import Users from '../Users'; // Justera sökvägen efter din mappstruktur

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to the Home Page</h1>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/AdminDashboard">Admin</Link> |
          <Link to="/login">Log In</Link> |
          <Link to="/RegistrationForm">Register</Link>
        </nav>
      </header>
      <section>
        <h2>Our Users</h2>
        <Users />
      </section>
    </div>
  );
}

export default HomePage;
