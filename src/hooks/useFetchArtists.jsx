import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

const useFetchArtists = () => {
  const { artists, fetchArtists, isLoggedIn } = useContext(AppContext);

  useEffect(() => {
    if (isLoggedIn) {
      fetchArtists();
    }
  }, [isLoggedIn, fetchArtists]);

  return { artists, fetchArtists };
};

export default useFetchArtists;
