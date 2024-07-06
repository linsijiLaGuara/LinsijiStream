import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReplyAll } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import useLogin from "../hooks/useLogin";

export default function Login() {
  const { username, setUsername, password, setPassword, error, handleLogin } =
    useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <FontAwesomeIcon className="icon-font" icon={faReplyAll} />
        <h1>Inicia sesión en LinsijiStream</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Nombre de usuario o correo electrónico
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <Button variant="login" type="submit" className="form-button">
            Iniciar sesión
          </Button>
        </form>
        <p>
          ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}
