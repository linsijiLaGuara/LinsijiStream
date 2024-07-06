import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import loginMockup from "../mockupServices/loginMockup.json";

const useLogin = () => {
  const { setUser } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    const {
      username: mockUsername,
      password: mockPassword,
      token,
    } = loginMockup;
    if (username === mockUsername && password === mockPassword) {
      setUser({ username, token });
      setError(null);
    } else {
      setError("Nombre de usuario o contraseña incorrectos.");
    }
  };

  return { username, setUsername, password, setPassword, error, handleLogin };
};

export default useLogin;
