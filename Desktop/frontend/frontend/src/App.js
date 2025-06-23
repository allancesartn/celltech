import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Produtos from './pages/Produtos';
import Editar from './pages/Editar';
import './dark_theme.css'; // ou './global_with_icons.css'

function App() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/logo.png" alt="CellTech" height="32" style={{ marginRight: '10px' }} />
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>CellTech</span>
        </div>
        <div className="links">
          <Link to="/"><i className="fas fa-list"></i> Produtos</Link>
          <Link to="/cadastro"><i className="fas fa-plus-circle"></i> Cadastro</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>

      <footer>
        <p>&copy; 2025 CellTech. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
