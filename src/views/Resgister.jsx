import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReplyAll } from "@fortawesome/free-solid-svg-icons";
import "./Register.css";
import useRegister from "../hooks/useRegister";

function Register() {
  const [step, setStep] = useState(1);
  const {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
    gender,
    setGender,
    error,
    handleRegistration,
  } = useRegister();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const renderFormStep = () => {
    if (step === 1) {
      return (
        <form onSubmit={handleEmailSubmit}>
          <label htmlFor="email">Dirección de correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Nombre@dominio.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button variant="siguiente" type="submit" className="form-button">
            Siguiente
          </Button>
        </form>
      );
    } else if (step === 2) {
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegistration();
          }}
          className="lebel-input"
        >
          <label htmlFor="username">Nombre de usuario</label>
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
          <label htmlFor="repeatPassword">Repetir contraseña</label>
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
          <label htmlFor="gender">Género</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="selections"
          >
            <option value="" hidden>
              Selecciona
            </option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>
          {error && <p className="error-message">{error}</p>}
          <Button variant="siguiente" type="submit" className="form-button">
            Registrarse
          </Button>
        </form>
      );
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <FontAwesomeIcon className="icon-font" icon={faReplyAll} />
        <h1>Regístrate para empezar a escuchar contenido</h1>
        {renderFormStep()}
        <p>
          ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
}

export default Register;