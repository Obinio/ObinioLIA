import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); // Lägg till state för laddningsindikator
  const [error, setError] = useState(''); // Lägg till state för felhantering

  useEffect(() => {
    setLoading(true); // Starta laddningsindikator
    fetch('http://localhost:5057/api/Users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false); // Stoppa laddningsindikator
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to load users'); // Sätt felmeddelande
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>; // Visa laddningsmeddelande
  if (error) return <p>{error}</p>; // Visa felmeddelande

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
