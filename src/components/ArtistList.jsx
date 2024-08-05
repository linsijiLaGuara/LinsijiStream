// ArtistsList.jsx
import React from "react";
import useFetchArtists from "../hooks/useFetchArtists";
import Artist from "./Artist";
import Pagination from "./Pagination";
import "./ArtistsList.css";

const ArtistsList = ({ setCurrentTrack }) => {
  const { artists, isLoading, currentPage, setCurrentPage, totalPages } =
    useFetchArtists();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <div className="artists-list">
        {artists.length === 0 ? (
          <p>No artists found</p>
        ) : (
          artists.map((artist) => (
            <div key={artist.id} className="artist">
              <Artist name={artist.nombre_artista} image={artist.imagen} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ArtistsList;
