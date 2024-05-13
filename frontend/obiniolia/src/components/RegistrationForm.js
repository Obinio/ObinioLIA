import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('User');  // Standardvärde som 'User'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5057/api/Users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email, role })
      });
      if (!response.ok) {
        throw new Error('Failed to create account');
      }
      alert('Account created successfully!');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
