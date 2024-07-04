import React, { useState } from 'react';


function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [gender, setGender] = useState('');
  const [step, setStep] = useState(1); // Estado para controlar el paso del registro

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías validar el correo electrónico si es necesario
    setStep(2); // Avanza al siguiente paso del registro
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías validar y enviar los datos de registro al servidor
    console.log('Datos de registro enviados:', { email, username, password, gender });
    // Redirigir al usuario a la página de inicio de sesión o a donde corresponda
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
          <button type="submit">Siguiente</button>
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
          <button type="submit">Registrarse</button>
        </form>
      );
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Regístrate para empezar a escuchar contenido</h1>
        {renderFormStep()}
        {step === 1 && (
          <button onClick={() => setStep(2)}>Siguiente</button>
        )}
        {step === 2 && (
          <button onClick={() => setStep(1)}>Volver</button>
        )}
        <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a></p>
      </div>
    </div>
  );
}

export default Register;
