import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Contexto/AppContext'; // Asegúrate de que la ruta sea correcta

export default function Login() {
  const { setUser } = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const history = useHistory(); // Hook para redirigir al usuario

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías implementar la lógica para autenticar al usuario con el servidor
    console.log('Datos de inicio de sesión:', { username, password });
    // Simulamos una autenticación exitosa
    setUser({ username });
    // Redirigir al usuario a su página de perfil u otra página de la aplicación
    history.push('/profile'); // Cambia '/profile' a la ruta que desees
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Iniciar sesión en tu cuenta</h1>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="username">Nombre de usuario o correo electrónico</label>
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
          <button type="submit">Iniciar sesión</button>
        </form>
        <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
      </div>
    </div>
  );
}


