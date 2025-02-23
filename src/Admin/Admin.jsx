import React, { useState, useEffect } from 'react';
import './Admin.css';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [companyData, setCompanyData] = useState({
    employees: [],
    revenue: {},
    projects: []
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <div className="login-box">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Company Admin Dashboard</h1>
        <button 
          className="logout-button"
          onClick={() => setIsAuthenticated(false)}
        >
          Logout
        </button>
      </header>

      <div className="admin-content">
        <section className="data-section">
          <h2>Employee Data</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Add your employee data here */}
            </tbody>
          </table>
        </section>

        <section className="data-section">
          <h2>Revenue Overview</h2>
          {/* Add your revenue charts/data here */}
        </section>

        <section className="data-section">
          <h2>Active Projects</h2>
          {/* Add your projects list here */}
        </section>
      </div>
    </div>
  );
};

export default Admin;
