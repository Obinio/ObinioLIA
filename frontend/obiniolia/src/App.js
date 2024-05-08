import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AdminPage from './components/AdminPage/AdminPage';
import LoginForm from './components/LoginForm';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Hem</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                        <li><Link to="/login">User Log In</Link></li> {/* Uppdaterad länk */}
                    </ul>
                </nav>
                <Routes>
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/login" element={<LoginForm />} /> {/* Uppdaterad path */}
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
