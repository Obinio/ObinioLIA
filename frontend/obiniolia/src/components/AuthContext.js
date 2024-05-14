import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);


export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('userToken');
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('userToken', token);
    setCurrentUser(token);
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
