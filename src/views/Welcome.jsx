import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import Sidebarwolcomen from "../components/Sidebarwolcomen";
import ArtistsList from "../components/ArtistList";
import AlbumList from "../components/AlbumList";

const Welcome = () => {
  return (
    <div className="home-container">
      <Sidebarwolcomen />
      <div className="main-content-welcome">
        <h1 className="center">Bienvenido</h1>
        <div className="artists-section">
          <div className="icon-f">
            <FontAwesomeIcon className="icon-fa" icon={faBackward} />
            <FontAwesomeIcon className="icon-fa" icon={faForward} />
          </div>
          <h2>Artistas</h2>
          <ArtistsList />
        </div>
        <div className="albums-section">
          <div className="icon-f">
            <FontAwesomeIcon className="icon-fa" icon={faBackward} />
            <FontAwesomeIcon className="icon-fa" icon={faForward} />
          </div>
          <h2>Albunes</h2>
          <AlbumList />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
