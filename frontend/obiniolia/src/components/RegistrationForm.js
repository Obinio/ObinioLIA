import React, { useState } from 'react';
import './RegistrationForm.css';  // Se till att skapa en CSS-fil för RegistrationForm

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('User');  // Standardvärde som 'User'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5057/Auth/register', {
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
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
