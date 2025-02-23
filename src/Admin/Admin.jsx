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
      alert('Credenciais inválidas');
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
          <h2>Login do Administrador</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Nome de usuário:</label>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Senha:</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>
          <button 
            className="home-button"
            onClick={() => window.location.href = '/'}
          >
            Voltar para Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Painel de Administração da Empresa</h1>
        <button 
          className="logout-button"
          onClick={() => setIsAuthenticated(false)}
        >
          Sair
        </button>
        <button 
          className="home-button"
          onClick={() => window.location.href = '/'}
        >
          Voltar para Home
        </button>
      </header>

      <div className="admin-content">
        <section className="data-section">
          <h2>Dados dos Funcionários</h2>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Posição</th>
                <th>Departamento</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Adicione seus dados de funcionários aqui */}
            </tbody>
          </table>
        </section>

        <section className="data-section">
          <h2>Visão Geral das Receitas</h2>
          {/* Adicione seus gráficos/dados de receita aqui */}
        </section>

        <section className="data-section">
          <h2>Projetos Ativos</h2>
          {/* Adicione sua lista de projetos aqui */}
        </section>
      </div>
    </div>
  );
};

export default Admin;
