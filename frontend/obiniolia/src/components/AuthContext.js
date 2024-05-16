import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    const userRole = localStorage.getItem('userRole');
    const username = localStorage.getItem('username');
    if (userToken && userRole && username) {
      setCurrentUser({
        token: userToken,
        role: userRole,
        username: username
      });
    }
  }, []);

  const login = (token, role, username) => {
    localStorage.setItem('userToken', token);
    localStorage.setItem('userRole', role);
    localStorage.setItem('username', username);
    setCurrentUser({
      token,
      role,
      username
    });
    navigate(role === 'Admin' ? '/AdminDashboard' : '/UserDashboard');
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
