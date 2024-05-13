import React from 'react';
import './HomePage.css';
import Users from '../Users'; // Justera sökvägen efter din mappstruktur

function HomePage() {
  return (
    <div className="homepage">
      <section>
        <h2>Our Users</h2>
        <Users />
      </section>
    </div>
  );
}

export default HomePage;
