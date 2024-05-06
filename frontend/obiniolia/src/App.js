import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AdminPage from './components/AdminPage/AdminPage'; // Kontrollera att sökvägen är korrekt

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navigationslänkar */}
                <nav>
                    <ul>
                        <li><Link to="/">Hem</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                    </ul>
                </nav>
                {/* Routes */}
                <Routes>
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
