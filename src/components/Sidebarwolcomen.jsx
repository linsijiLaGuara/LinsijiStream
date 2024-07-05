import React from 'react';
import { Link } from 'react-router-dom';

const Sidebarwolcomen = () => {
  return (
    <div className="Sidebarwolcomen">
      <h2>LinsijiStream</h2>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/search">Buscar</Link></li>
        </ul>
      </nav>
      <div className="library-section">
        <h3>Biblioteca</h3>
        <button>Crea tu lista</button>
      </div>
    </div>
  );
};

export default Sidebarwolcomen;