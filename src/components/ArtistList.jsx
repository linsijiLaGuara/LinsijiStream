import React, { useEffect } from "react";
import useFetchArtists from "../hooks/useFetchArtists";
import Artist from "./Artist";
import "./ArtistsList.css";

const ArtistsList = ({ setCurrentTrack }) => {
  const { artists, fetchArtists } = useFetchArtists();

  useEffect(() => {
    fetchArtists();
  }, [fetchArtists]);

  if (!Array.isArray(artists)) {
    return <div>No hay artistas disponibles.</div>;
  }

  const handleArtistClick = (artist) => {
    const track = { url: artist.url_audio, name: artist.nombre_artista }; // Asume que cada artista tiene un campo url_audio
    setCurrentTrack(track);
  };

  return (
    <div className="artists-list">
      {artists.map((artist, index) => (
        <div key={index} onClick={() => handleArtistClick(artist)}>
          <Artist name={artist.nombre_artista} image={artist.imagen} />
        </div>
      ))}
    </div>
  );
};

export default ArtistsList;
