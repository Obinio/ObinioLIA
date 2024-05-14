import React from 'react';
import { useAuth } from './AuthContext'; // Justera sökvägen beroende på din mappstruktur

function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav>
      <div>
        {currentUser && (
          <button onClick={logout}>Log Out</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
