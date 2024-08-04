// Search.jsx
import React, { useState, useEffect } from "react";
import "./Search.css";
import Sidebarwelcomen from "../components/SidebarWelcome";
import IconsPly from "../components/Icons";
import useFetchArtistSearch from "../hooks/useFetchArtistSearch";

const Search = ({ setCurrentTrack }) => {
  const { searchResults, searchArtists, isLoading, albums, loadAlbums } =
    useFetchArtistSearch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    loadAlbums();
  }, [loadAlbums]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
    if (event.target.value.trim()) {
      searchArtists(event.target.value);
    }
  };

  return (
    <>
      <div className="search-page">
        <Sidebarwelcomen />
        <div className="main-content-search">
          <h1>Buscar</h1>
          <div className="search-container">
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Buscar artista..."
              className="search-input"
            />
            <div className="albums-list">
              {isLoading ? (
                <p>Loading...</p>
              ) : query ? (
                searchResults.map((artist, index) => (
                  <div key={index} className="artist-item">
                    <img
                      src={artist.imagen}
                      alt={artist.nombre_artista}
                      className="artist-image"
                    />
                    
                    <div className="artist-details">
                      <p>{artist.nombre_artista}</p>
                    </div>
                  </div>
                ))
              ) : (
                albums.map((album, index) => (
                  <div
                    key={index}
                    className="album-item"
                    onClick={() => setCurrentTrack(album.track)}
                  >
                    <img
                      src={album.img}
                      alt={album.nombre}
                      className="album-image"
                    />
                    <div className="album-details">
                      <IconsPly />
                      <h2>{album.nombre}</h2>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
