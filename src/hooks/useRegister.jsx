import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const useRegister = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(null);
  const { handleRegisterSubmit } = useContext(AppContext);

  const handleRegistration = async () => {
    if (!email || !username || !password || !repeatPassword || !gender) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (password !== repeatPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    const userData = {
      email,
      username,
      password,
      gender,
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
  };
};

export default useRegister;
