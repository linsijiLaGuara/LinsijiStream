// Register.js
import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Registrate para empezar a escuchar contenido</h1>
        <form>
          <label htmlFor="email">Dirección de correo electrónico</label>
          <input type="email" id="email" name="email" placeholder="Nombre@dominio.com" />
          <button type="submit">Siguiente</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
