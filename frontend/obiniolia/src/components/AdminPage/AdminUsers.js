import React, { useEffect, useState } from 'react';
import './AdminUsers.css';

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5057/api/Users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const deleteUser = (userId) => {
    fetch(`http://localhost:5057/api/Users/${userId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setUsers(users.filter(user => user.id !== userId));
      } else {
        throw new Error('Failed to delete user');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  const handleEditUser = (userId) => {
    // Implementera redigering av användare här
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="users-container">
      <h1>Registered Users</h1>
      <div className="users-list">
        {users.map(user => (
          <div key={user.id} className="user-item">
            <div>{user.username} - {user.email}</div>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => handleEditUser(user.id)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminUsers;
