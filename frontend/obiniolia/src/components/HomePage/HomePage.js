import React from 'react';
import './HomePage.css';
import Users from '../Users.js'; // Gå upp en nivå och hitta Users.js
import AddUserForm from '../AddUserForm.js'; // Justera sökvägen efter behov

function onAddUser(user) {
  // Använd fetch-API för att skicka den nya användaren till din backend
  console.log('Adding user:', user);
  // Här skulle du lägga till logik för att faktiskt skicka användaren till backend
}

// Inkludera AddUserForm i din render-metod eller returvärde
<AddUserForm onAddUser={onAddUser} />

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Users /> {/* Använd Users-komponenten här */}
    </div>
  );
}

export default HomePage;
