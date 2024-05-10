import React, { useState } from 'react';
import Login from './Components/login/Login';
import Dashboard from './Components/dashboard/Dashboard';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (username, password) => {

    if (username === 'admin' && password === '1234') {
      setAuthenticated(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <div className="App">
      {!authenticated ? <Login onLogin={handleLogin} /> : <Dashboard onLogout={handleLogout} />}
    </div>
  );
};

export default App;
