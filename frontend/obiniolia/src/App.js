import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AdminPage from './components/AdminPage/AdminPage';
import LoginForm from './components/LoginForm';
import UserDashboard from './components/UserDashboard';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer.js'; // Importera Footer

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

