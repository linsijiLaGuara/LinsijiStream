import { useState } from "react";

const useLogin = () => {
  const [user, setUser] = useState(null);

  const setUseLogin = (usuario) => setUser(usuario);

  return { getDeveloper: user, setUseLogin };
};

export default useLogin;
