import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ role }) {
  // Ersätt dessa kontroller med din egen logik för att validera autentisering och roll
  const userToken = localStorage.getItem('userToken');
  const userRole = localStorage.getItem('userRole');  // Antag att du sparar användarrollen i localStorage

  if (!userToken || userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
