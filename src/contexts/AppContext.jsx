// AppContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";
const { VITE_SERVER_URL_LOCAL } = import.meta.env;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userSession, setUserSession] = useState(
    localStorage.getItem("session")
      ? JSON.parse(localStorage.getItem("session"))
      : {
          email: "",
          nombre: "",
        }
  );

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );

  const [isLoggedIn, setisLoggedIn] = useState(!!localStorage.getItem("token"));
  const [artists, setArtists] = useState([]);

  const logIn = async (userData) => {
    const tokenJson = await axios.post(
      `${VITE_SERVER_URL_LOCAL}/api/users/login`,
      userData
    );
    const { token } = tokenJson.data;
    return token;
  };

  const logOut = () => {
    setisLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("session");
    setToken(null);
    setUserSession({ email: "", nombre: "" });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const {
      email: { value: email },
      password: { value: password },
    } = event.target;

    const userData = {
      email,
      password,
    };

    try {
      const token = await logIn(userData);
      const tokenPayload = token.split(".")[1];
      const userSesion = JSON.parse(atob(tokenPayload));

      setUserSession({
        id: 1,
        nombre: userSesion.nombre,
        email: userSesion.email,
      });
      setisLoggedIn(true);

      localStorage.setItem("token", token);
      localStorage.setItem(
        "session",
        JSON.stringify({
          id: 1,
          nombre: userSesion.nombre,
          email: userSesion.email,
        })
      );
      setToken(token);

      window.location.href = "/welcome";
    } catch (error) {
      console.error("Login error:", error);
      window.alert("Error al iniciar sesión. Verifique sus credenciales.");
    }
  };

  const handleRegisterSubmit = async (userData) => {
    try {
      await axios.post(`${VITE_SERVER_URL_LOCAL}/api/users/register`, userData);

      window.alert("Usuario registrado con éxito.");
      window.location.href = "/login";
    } catch (error) {
      console.error("Register error:", error);
      throw new Error("Error al registrar el usuario. Verifique los datos.");
    }
  };

  const fetchArtists = async () => {
    try {
      const response = await axios.get(
        `${VITE_SERVER_URL_LOCAL}/api/users/welcome`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setArtists(response.data);
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchArtists();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(
        `${VITE_SERVER_URL_LOCAL}/api/users/album`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    
      return response.data;
    } catch (error) {
      console.error("Error fetching albums:", error);
      throw error;
    }
  };

  const searchArtistsByName = async (query) => {
    try {
      const response = await axios.get(
        `${VITE_SERVER_URL_LOCAL}/api/users/search?query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error searching artists:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchAlbums().then(data => setArtists(data)).catch(error => console.error(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        userSession,
        logOut,
        logIn,
        handleLoginSubmit,
        handleRegisterSubmit,
        artists,
        fetchArtists,
        fetchAlbums,
        searchArtistsByName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
