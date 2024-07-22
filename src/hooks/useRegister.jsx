import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const useRegister = () => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [genero, setGenero] = useState("");
  const [error, setError] = useState(null);
  const { handleRegisterSubmit } = useContext(AppContext);

  const handleRegistration = async () => {
    if (!email || !nombre || !password || !repeatPassword || !genero) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (password !== repeatPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const userData = {
      email,
      nombre,
      password,
      genero,
    };

    try {
      await handleRegisterSubmit(userData);
    } catch (error) {
      console.error("Register error:", error);
      setError("Error al registrar el usuario. Verifique los datos.");
    }
  };

  return {
    email,
    setEmail,
    nombre,
    setNombre,
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
    genero,
    setGenero,
    error,
    handleRegistration,
  };
};

export default useRegister;
