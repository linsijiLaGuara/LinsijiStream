import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          {/* Añade más enlaces según sea necesario */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;