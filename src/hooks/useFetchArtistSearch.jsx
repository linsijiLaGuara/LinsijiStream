import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const useFetchArtistSearch = () => {
  const { searchAlbumsByArtist, isLoading } = useContext(AppContext);

  const [searchResults, setSearchResults] = useState([]); // Inicializa searchResults como un array vacío

  const searchArtists = async (query) => {
    try {
      const results = await searchAlbumsByArtist(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching artists:", error);
      setSearchResults([]);
    }
  };

  return {
    searchResults,
    searchArtists,
    isLoading,
  };
};

export default useFetchArtistSearch;
