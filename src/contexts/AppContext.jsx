// AppContext.jsx
import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
const { VITE_SERVER_URL_LOCAL } = import.meta.env;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(!!localStorage.getItem("token"));
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [songs, setSongs] = useState([]);

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
  const fetchUserWelcome = async () => {
    try {
      const response = await axios.get(
        `${VITE_SERVER_URL_LOCAL}/api/users/welcome`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching userWelcome:", error);
      throw error;
    }
  };

  const fetchArtists = useCallback(
    async (page) => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${VITE_SERVER_URL_LOCAL}/api/users/artist?page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setArtists(response.data);
        setIsLoading(false);
        return response.data;
      } catch (error) {
        console.error("Error fetching albums:", error);
        setIsLoading(false);
        throw error;
      }
    },
    [token]
  );
  const fetchAlbums = useCallback(
    async (page) => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${VITE_SERVER_URL_LOCAL}/api/users/album?page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAlbums(response.data);
        setIsLoading(false);
        return response.data;
      } catch (error) {
        console.error("Error fetching albums:", error);
        setIsLoading(false);
        throw error;
      }
    },
    [token]
  );

  const nextPage = () =>
    setCurrentPage((prev) => {
      const nextPage = prev + 1;
      fetchAlbums(nextPage);
      return nextPage;
    });

  const prevPage = () =>
    setCurrentPage((prev) => {
      const prevPage = prev > 0 ? prev - 1 : 0;
      fetchAlbums(prevPage);
      return prevPage;
    });

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

  const searchAlbumsByName = async (query) => {
    try {
      const response = await axios.get(
        `${VITE_SERVER_URL_LOCAL}/api/users/searchAlbum?query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error searching albums:", error);
      throw error;
    }
  };
  const searchAlbumsByArtist = async (artistName) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_SERVER_URL_LOCAL
        }/api/users/searchAlbumsByArtist?name=${artistName}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAlbums(response.data);
      return response.data;
    } catch (error) {
      console.error("Error searching albums by artist:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchSongs = useCallback(async () => {
    if (!isLoggedIn) return;

    setIsLoading(true);
    try {
      const response = await axios.get(
        `${VITE_SERVER_URL_LOCAL}/api/users/songs`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSongs(response.data);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      console.error("Error fetching songs:", error);
      setIsLoading(false);
    }
  }, [token, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchSongs();
    }
  }, [isLoggedIn, fetchSongs]);
  useEffect(() => {
    if (isLoggedIn) {
      fetchArtists();
      fetchAlbums(currentPage);
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
        albums,
        isLoading,
        nextPage,
        prevPage,
        fetchArtists,
        searchArtistsByName,
        searchAlbumsByName,
        fetchSongs,
        fetchAlbums,
        fetchUserWelcome,
        searchAlbumsByArtist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
