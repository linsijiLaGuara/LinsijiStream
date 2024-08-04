import React, { useEffect } from "react";
import Sidebarwelcomen from "../components/SidebarWelcome";
import ArtistsList from "../components/ArtistList";
import AlbumList from "../components/AlbumList";
import useFetchWelcome from "../hooks/useFetchWelcome";

const Welcome = () => {
  const { welcomeData, isLoading, isLoggedIn } = useFetchWelcome();
  useEffect(() => {
    if (isLoggedIn) {
      welcomeData();
    }
  }, [isLoggedIn, welcomeData]);

  return (
    <div className="home-container">
      <Sidebarwelcomen />
      <div className="main-content-welcome">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <h1 className="center">{welcomeData}</h1>
        )}
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
