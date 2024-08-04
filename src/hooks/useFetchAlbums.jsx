import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const useFetchAlbums = () => {
  const { albums, fetchAlbums, isLoggedIn } = useContext(AppContext);

  useEffect(() => {
    if (isLoggedIn) {
      fetchAlbums();
    }
  }, [isLoggedIn, fetchAlbums]);

  return { albums, isLoading: false, fetchAlbums };
};

export default useFetchAlbums;
