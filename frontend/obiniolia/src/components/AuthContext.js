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
    if (userToken && userRole) {
      setCurrentUser({
        token: userToken,
        role: userRole,
      });
    }
  }, []);

  const login = (token, role) => {
    localStorage.setItem('userToken', token);
    localStorage.setItem('userRole', role);
    setCurrentUser({
      token,
      role,
    });
    navigate(role === 'Admin' ? '/AdminDashboard' : '/UserDashboard');
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
