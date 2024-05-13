import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importera useNavigate hook

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // För navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5057/api/Users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      // Navigera baserat på användarens roll
      if (data.role === 'Admin') {
        navigate('/admin-dashboard'); // ändra till din admin dashboard path
      } else if (data.role === 'User') {
        navigate('/user-dashboard'); // ändra till din user dashboard path
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
