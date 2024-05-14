import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AdminPage from './components/AdminPage/AdminPage';
import LoginForm from './components/LoginForm';
import UserDashboard from './components/UserDashboard';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer'; // Importera Footer
import ProtectedRoute from './components/ProtectedRoute'; // Importera ProtectedRoute
import AdminDashboard from './components/AdminPage/AdminDashboard';
import Navbar from './components/Navbar';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar /> {/* Navbar visas på alla sidor */}
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route element={<ProtectedRoute role="Admin" />}>
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;

