import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
        <header>
          <h1>Welcome to the Home Page</h1>
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/admin">Admin</Link> | 
            <Link to="/login">Log In</Link> | 
            <Link to="/RegistrationForm">Registration</Link>
          </nav>
        </header>
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
