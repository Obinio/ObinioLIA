import React, { useEffect, useState } from 'react';

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5057/Auth/login') // Anpassa URL efter din API
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Registered Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminUsers;
