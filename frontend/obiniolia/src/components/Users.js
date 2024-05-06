import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setLoading(true);
    fetch('http://localhost:5057/api/Users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setError('Failed to load users');
        setLoading(false);
      });
  };

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
    .catch(error => {
      console.error('Error:', error);
      setError('Failed to delete user');
    });
  };

  const saveUser = (user) => {
    const method = user.id ? 'PUT' : 'POST';
    const url = user.id ? `http://localhost:5057/api/Users/${user.id}` : 'http://localhost:5057/api/Users';

    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      if (user.id) {
        setUsers(users.map(u => u.id === user.id ? data : u));
      } else {
        setUsers([...users, data]);
      }
      setEditingUser(null);
    })
    .catch(error => {
      console.error('Error:', error);
      setError('Failed to save user');
    });
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Users List</h2>
      {editingUser ? (
        <UserForm user={editingUser} onSave={saveUser} />
      ) : (
        <>
          <button onClick={() => setEditingUser({ id: null, username: '', email: '' })}>
            Add New User
          </button>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.username} - {user.email}
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function UserForm({ user, onSave }) {
  const [formData, setFormData] = useState({...user});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <button type="submit">Save User</button>
    </form>
  );
}

export default Users;
