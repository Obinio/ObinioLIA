import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to the Home Page!</h1>
      </header>
      <section>
        <div className="info-box">
          <h2>Examensarbete för Obinio</h2>
          <p>Här kan du utforska funktionaliteten i vår applikation. Logga in som användare eller administratör för att använda de tillgängliga funktionerna.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
