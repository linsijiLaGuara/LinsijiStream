import React, { useEffect } from "react";
import useFetchArtists from "../hooks/useFetchArtists"; 
import Artist from "./Artist";
import "./ArtistsList.css"; 

const ArtistsList = () => {
  const { artists, fetchArtists } = useFetchArtists();

  useEffect(() => {
    fetchArtists();
  }, [fetchArtists]);

  if (!Array.isArray(artists)) {
    return <div>No hay artistas disponibles.</div>;
  }

  return (
    <div className="artists-list">
      {artists.map((artist, index) => (
        <Artist key={index} name={artist.artist_name} image={artist.url_image} />
      ))}
    </div>
  );
};

export default ArtistsList;
