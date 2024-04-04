import React from 'react';
import './HomePage.css';
import Users from '../Users.js'; // Gå upp en nivå och hitta Users.js


function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Users /> {/* Använd Users-komponenten här */}
    </div>
  );
}

export default HomePage;
