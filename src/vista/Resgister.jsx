import React, { useState } from "react";
import "./Register.css"; 

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [gender, setGender] = useState("");
  const [step, setStep] = useState(1);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de registro enviados:", {
      email,
      username,
      password,
      gender,
    });
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
          <button type="submit" className="form-button">
            Siguiente
          </button>
        </form>
      );
    } else if (step === 2) {
      return (
        <form onSubmit={handleRegistrationSubmit}>
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
          >
            <option value="">Selecciona</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>
          <button type="submit" className="form-button">
            Registrarse
          </button>
        </form>
      );
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
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
