import React, { useEffect } from "react";
import IconsPly from "./Icons";
import useFetchAlbums from "../hooks/useFetchAlbums";
import "./AlbumList.css";

const AlbumList = () => {
  const { albums, fetchAlbums } = useFetchAlbums();

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div className="album-list">
      {albums.map((album) => (
        <div key={album.id} className="album">
          <img
            className="album-image"
            src={album.url_image}
            alt={album.nombre_album}
          />
          <IconsPly />
          <h5>{album.nombre_album}</h5>
          <p>{album.artist_name}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;