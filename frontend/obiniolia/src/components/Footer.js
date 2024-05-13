import React from 'react';
import './Footer.css';  // Skapa och anpassa Footer.css för ytterligare styling

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 ObinioLIA. All rights reserved.</p>
      <nav>
        <a href="/about">About</a> | 
        <a href="/contact">Contact</a>
      </nav>
    </footer>
  );
}

export default Footer;
