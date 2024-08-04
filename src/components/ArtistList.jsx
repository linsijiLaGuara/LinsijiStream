import React, { useEffect } from "react";
import useFetchArtists from "../hooks/useFetchArtists";
import Artist from "./Artist";
import "./ArtistsList.css";

const ArtistsList = ({ setCurrentTrack }) => {
  const { artists, fetchArtists, isLoading } = useFetchArtists();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="artists-list">
      {isLoading ? (
        <p>Loading...</p>
      ) : artists && artists.length === 0 ? (
        <p>No albums found</p>
      ) : (
        artists.map((artist, index) => (
          <div key={artist.id} className="album">
            <Artist name={artist.nombre_artista} image={artist.imagen} />

           
          </div>
        ))
      )}
    </div>
  );
};

export default ArtistsList;
