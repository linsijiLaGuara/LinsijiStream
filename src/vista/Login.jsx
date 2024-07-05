import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { AppContext } from "../Contexto/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReplyAll } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

export default function Login() {
  const { setUser } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de inicio de sesión:", { username, password });
    setUser({ username });

  };

  return (
    <div className="login-page">
      <div className="login-container">
        <FontAwesomeIcon className="icon-font" icon={faReplyAll} />
        <h1>Inicia sesión en LinsijiStream</h1>
        <form onSubmit={handleLoginSubmit}>
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
          <Button
            variant="login"
            type="submit"
            className="form-button"
          >
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
