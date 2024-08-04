// useFetchArtistSearch.js
import { useState, useContext, useCallback } from "react";
import { AppContext } from "../contexts/AppContext";

const useFetchArtistSearch = () => {
  const { searchArtistsByName, fetchAlbums } = useContext(AppContext);
  const [searchResults, setSearchResults] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchArtists = async (query) => {
    setIsLoading(true);
    try {
      const results = await searchArtistsByName(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching artists:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadAlbums = useCallback(async () => {
    try {
      const albumsData = await fetchAlbums();
      setAlbums(albumsData);
    } catch (error) {
      console.error("Error loading albums:", error);
    }
  }, [fetchAlbums]);

  return {
    searchResults,
    searchArtists,
    isLoading,
    albums,
    loadAlbums,
  };
};

export default useFetchArtistSearch;
