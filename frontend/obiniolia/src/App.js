import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginForm from './components/LoginForm';
import UserDashboard from './components/UserDashboard';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/AdminPage/AdminDashboard';
import Navbar from './components/Navbar';
import { AuthProvider } from './components/AuthContext';
import './components/Navbar.css'; // Importera Navbar.css
import AdminUsers from './components/AdminPage/AdminUsers';
import AdminDocuments from './components/AdminPage/AdminDocuments';
import AddFields from './components/AdminPage/AddFields';
import AdminUpload from './components/AdminPage/AdminUpload';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar /> {/* Navbar visas på alla sidor */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/RegistrationForm" element={<RegistrationForm />} />
            <Route path="/UserDashboard" element={<UserDashboard />} />

            {/* Skyddad route för admin */}
            <Route element={<ProtectedRoute role="Admin" />}>
              <Route path="/AdminDashboard" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/documents" element={<AdminDocuments />} />
              <Route path="/admin/add-fields" element={<AddFields />} />
              <Route path="/admin/upload" element={<AdminUpload />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
