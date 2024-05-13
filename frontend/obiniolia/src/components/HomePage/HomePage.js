import React from 'react';
import './HomePage.css';
import Users from '../Users'; // Justera sökvägen efter din mappstruktur

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to the Home Page</h1>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
        </nav>
      </header>
      <section>
        <h2>Our Users</h2>
        <Users />
      </section>
      <footer>
        <p>© 2024 ObinioLIA. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
