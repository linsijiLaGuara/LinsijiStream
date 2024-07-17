import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../contexts/AppContext";
import "./Login.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
  const { handleLoginSubmit } = useContext(AppContext);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleUser = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleForm = async (event) => {
    event.preventDefault();

    if (!user.email.trim() || !user.password.trim()) {
      return window.alert("Email y password obligatorias.");
    }

    if (!emailRegex.test(user.email)) {
      return window.alert("El formato del email no es correcto!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <FontAwesomeIcon className="icon-font" icon={faReplyAll} />
        <h1>Inicia sesión en LinsijiStream</h1>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="username" className="">
            Correo electrónico
          </label>
          <input
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handleUser}
            name="email"
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={handleUser}
            name="password"
          />

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
};
export default Login;
