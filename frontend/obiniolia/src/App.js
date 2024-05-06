import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AdminPage from './components/AdminPage'; // Förutsätter att du har skapat en AdminPage-komponent

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
                <Switch>
                    <Route path="/admin">
                        <AdminPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
