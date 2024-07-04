import React from "react";
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header">
      <NavLink to="/"></NavLink>
      <NavLink to="/register">
        <Button variant="register" className="custom-register-button">
          Registrarte
        </Button>
      </NavLink>

      <NavLink to="/login">
        <Button variant="login" className="custom-login-button">
          Inicia sesión
        </Button>
      </NavLink>
    </nav>
  );
}

export default Header;
