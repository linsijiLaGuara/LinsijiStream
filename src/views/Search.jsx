import React, { useState, useEffect } from "react";
import albums_mockup from "../mockupServices/albumList.json";
import "./Search.css";
import Sidebarwelcomen from "../components/SidebarWelcome";
import IconsPly from "../components/Icons";

const Search = ({ setCurrentTrack }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setAlbums(albums_mockup);
  }, []);

  return (
    <>
      <div className="search-page">
        <Sidebarwelcomen />
        <div className="main-content-search">
          <h1>Buscar</h1>
          <div className="search-container">
            <div className="albums-list">
              {albums.map((album, index) => (
                <div
                  key={index}
                  className="album-item"
                  onClick={() => setCurrentTrack(album.track)}
                >
                  <img
                    src={album.url_image}
                    alt={album.nombre_album}
                    className="album-image"
                  />
                  <div className="album-details"><IconsPly />
                    <h2>{album.nombre_album}</h2>

                    <p>{album.artist_name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
