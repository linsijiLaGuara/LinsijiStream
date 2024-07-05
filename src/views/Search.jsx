import React, { useState, useEffect } from "react";
import albums_mockup from "../mockupServices/albumList.json";
import "./Search.css";

const Search = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setAlbums(albums_mockup);
  }, []);

  return (
    <div className="search-container">
      <h1>Buscar</h1>
      <div className="albums-list">
        {albums.map((album, index) => (
          <div key={index} className="album-item">
            <img
              src={album.url_image}
              alt={album.nombre_album}
              className="album-image"
            />
            <div className="album-details">
              <h2>{album.nombre_album}</h2>
              <p>{album.artist_name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
