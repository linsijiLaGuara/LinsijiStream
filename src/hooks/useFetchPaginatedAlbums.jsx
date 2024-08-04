// useFetchPaginatedAlbums.js
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const useFetchPaginatedAlbums = () => {
  const { albums, isLoading, nextPage, prevPage } = useContext(AppContext);

  return { albums, isLoading, nextPage, prevPage };
};

export default useFetchPaginatedAlbums;
