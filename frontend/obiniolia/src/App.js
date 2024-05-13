import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AdminPage from './components/AdminPage/AdminPage';
import LoginForm from './components/LoginForm';
import UserDashboard from './components/UserDashboard';
import RegistrationForm from './components/RegistrationForm';
function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Hem</Link></li>
                        <li><Link to="/Admin">Admin</Link></li>
                        <li><Link to="/Login">Log In</Link></li> {/* Uppdaterad länk */}
                        <li><Link to="/RegistrationForm">Registration</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/login" element={<LoginForm />} /> {/* Uppdaterad path */}
                    <Route path="/User-Dashboard" element={<UserDashboard />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/RegistrationForm" element={<RegistrationForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
