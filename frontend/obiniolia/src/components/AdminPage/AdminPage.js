import React, { useState } from 'react';
import LoginForm from '../LoginForm';  // Se till att sökvägen är korrekt

function AdminPage() {
    const [user, setUser] = useState(null);

    const handleLogin = (username, password) => {
        // Här kan du lägga till mer avancerad logik eller anropa ett API
        if (username === 'admin' && password === 'adminpass') {
            setUser({ username });
        } else {
            alert('Fel användarnamn eller lösenord');
        }
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            {user ? (
                <div>Välkommen, {user.username}!</div>
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
}

export default AdminPage;
