import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { ENDPOINT } from "../services/services";
import { AppContext } from "../contexts/AppContext";

import "./Login.css";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const initialForm = { email: "user123@gmail.com", password: "123456" };

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialForm);
  const { setUseLogin } = useContext(AppContext);

  const handleUser = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleForm = (event) => {
    event.preventDefault();

    if (!user.email.trim() || !user.password.trim()) {
      return window.alert("Email y password obligatorias.");
    }

    if (!emailRegex.test(user.email)) {
      return window.alert("El formato del email no es correcto!");
    }

    axios
      .post(ENDPOINT.login, user)
      .then(({ data }) => {
        window.sessionStorage.setItem("token", data.token);
        window.alert("Usuario identificado con éxito 😀.");
        setUseLogin({});
        navigate("/welcome");
      })
      .catch(({ response: { data } }) => {
        console.error(data);
        window.alert(`${data.message} 🙁.`);
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <FontAwesomeIcon className="icon-font" icon={faReplyAll} />
        <h1>Inicia sesión en LinsijiStream</h1>
        <form onSubmit={handleForm}>
          <label htmlFor="username">
            Nombre de usuario o correo electrónico
          </label>
          <input
            value={user.email}
            onChange={handleUser}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
          />
          <label htmlFor="password">Contraseña</label>
          <input
            value={user.password}
            onChange={handleUser}
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
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
