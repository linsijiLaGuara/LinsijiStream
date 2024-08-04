import React from "react";
import useFetchPaginatedAlbums from "../hooks/useFetchPaginatedAlbums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import "./Paginated.css";

const Paginated = () => {
  const { albums, isLoading, nextPage, prevPage } = useFetchPaginatedAlbums();

  return (
    <div className="paginated-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="albums-list">
          {albums.length === 0 ? (
            <p>No albums found</p>
          ) : (
            albums.map((album, index) => (
              <div key={index} className="album-item">
                <img
                  src={album.img}
                  alt={album.nombre}
                  className="album-image"
                />
                <div className="album-details">
                  <h2>{album.nombre}</h2>
                </div>
              </div>
            ))
          )}
        </div>
      )}
      <div className="pagination-controls">
        <FontAwesomeIcon
          className="icon-fa"
          icon={faBackward}
          onClick={prevPage}
        />
        <FontAwesomeIcon
          className="icon-fa"
          icon={faForward}
          onClick={nextPage}
        />
      </div>
    </div>
  );
};

export default Paginated;
