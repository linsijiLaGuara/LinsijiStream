import React, { useState } from "react";
import "./Search.css";
import Sidebarwelcomen from "../components/SidebarWelcome";
import IconsPly from "../components/Icons";
import useFetchArtistSearch from "../hooks/useFetchArtistSearch";

const Search = ({ setCurrentTrack }) => {
  const { searchResults, searchArtists, isLoading } = useFetchArtistSearch();
  const [query, setQuery] = useState("");

  // Llama a la búsqueda solo cuando se haga clic en el botón
  const handleSearchClick = () => {
    if (query.trim()) {
      searchArtists(query);
    }
  };

  const handleArtistSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-page">
      <Sidebarwelcomen />
      <div className="main-content-search">
        <h1>Buscar</h1>
        <div className="search-container">
          <input
            type="text"
            value={query}
            onChange={handleArtistSearch}
            placeholder="Buscar artista..."
            className="search-input"
          />
          <button onClick={handleSearchClick} className="search-button">
            Buscar
          </button>
          <div className="results-container">
            <div className="artists-list">
              {isLoading ? (
                <p>Loading...</p>
              ) : Array.isArray(searchResults) && searchResults.length > 0 ? (
                searchResults.map((artist, index) => (
                  <div key={index} className="artist-item">
                    <img
                      src={artist.img}
                      alt={artist.nombre}
                      className="album-image"
                    />
                    <IconsPly />
                    <div className="artist-details">
                      <p>{artist.nombre}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No se encontraron resultados.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
