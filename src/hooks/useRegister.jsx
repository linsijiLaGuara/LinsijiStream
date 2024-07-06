import { useState } from "react";
import registerMockup from "../mockupServices/registerMockup.json";

const useRegister = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(null);

  const handleRegistration = () => {
    const { email: mockEmail, username: mockUsername } = registerMockup;
    if (email === mockEmail && username === mockUsername) {
      setError("El correo electrónico o el nombre de usuario ya están en uso.");
    } else {
      setError(null);

      console.log("Datos de registro enviados:", {
        email,
        username,
        password,
        gender,
      });
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
