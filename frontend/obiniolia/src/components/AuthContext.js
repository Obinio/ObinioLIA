import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    // Här kan du också lägga till ytterligare kontroller om du lagrar mer information, t.ex. userRole
    if (userToken) {
      setCurrentUser({
        token: userToken,
        // Exempel: Lägg till role om du sparar detta också
        role: localStorage.getItem('userRole')
      });
    }
  }, []);

  const login = (token, role) => {
    localStorage.setItem('userToken', token);
    localStorage.setItem('userRole', role);  // Spara rollen om du använder den
    setCurrentUser({
      token: token,
      role: role
    });
  };

  const logout = () => {
    // Ta bort all användarinformation från localStorage
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');  // Se till att ta bort rollen också
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
