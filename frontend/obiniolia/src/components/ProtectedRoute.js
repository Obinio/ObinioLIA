import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ role }) {
  // Hämta token och roll från localStorage eller annan global state
  const isAuthenticated = localStorage.getItem('userToken');
  const userRole = localStorage.getItem('userRole');

  // Kontrollera både om användaren är autentiserad och om rollen matchar
  if (!isAuthenticated || userRole !== role) {
    // Omdirigera till login om något villkor inte uppfylls
    return <Navigate to="/login" replace />;
  }

  // Tillåt åtkomst om allt är korrekt
  return <Outlet />;
}

export default ProtectedRoute;
