import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

const useFetchArtists = () => {
  const {
    artists,
    fetchArtists,
    isLoading,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useContext(AppContext);

  useEffect(() => {
    fetchArtists(currentPage);
  }, [currentPage, fetchArtists]);

  return {
    artists,
    isLoading,
    currentPage,
    setCurrentPage,
    totalPages,
  };
};

export default useFetchArtists;
