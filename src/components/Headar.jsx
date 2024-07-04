import React from 'react';
import Button from 'react-bootstrap/Button';
import './Header.css';

function Header() {
  return (
    <div className="header">

      <Button variant="register" className="custom-register-button">Registrarte</Button>
      <Button variant="login" className="custom-login-button">
      Inicia sesión
    </Button>
        </div>
  );
}

export default Header;
