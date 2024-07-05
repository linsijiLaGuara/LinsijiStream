import React from "react";
import Sidebarwolcomen from "../components/Sidebarwolcomen";
import ArtistsList from "../components/ArtistList";
import AlbumList from "../components/AlbumList";

const Welcome = () => {
  return (
    <div className="home-container">
      <Sidebarwolcomen />
      <div className="main-content-welcome">
        <h1>Bienvenido</h1>
        <div className="artists-section">
          <h2>Artistas</h2>
          <ArtistsList />
        </div>
        <div className="albums-section">
          <h2>Albunes</h2>
          <AlbumList />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
