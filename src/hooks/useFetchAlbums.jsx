import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const useFetchAlbums = () => {
  const { fetchAlbums, isLoggedIn } = useContext(AppContext);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchAlbums().then(data => setAlbums(data));
    }
  }, [isLoggedIn, fetchAlbums]);

  return { albums, fetchAlbums };
};

export default useFetchAlbums;
