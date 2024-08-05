import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import axios from "axios";

const Album = () => {
  const { albumId } = useParams();
  const { play, pause, playing, currentSong } = useAudioPlayer();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    // Reemplaza con tu lógica de obtención de álbum
    const fetchAlbum = async () => {
      try {
        const response = await axios.get(`/api/albums/${albumId}`);
        setAlbum(response.data);
      } catch (error) {
        console.error("Error fetching album:", error);
      }
    };

    fetchAlbum();
  }, [albumId]);

  if (!album) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col text-center">
          <img
            src={album.img}
            alt={album.nombre}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
          <h2>{album.nombre}</h2>
        </div>
      </div>
      <div className="list-group">
        {album.canciones.map((cancion) => (
          <button
            key={cancion.id}
            className={`list-group-item list-group-item-action ${
              currentSong === cancion.url ? "active" : ""
            }`}
            onClick={() => {
              if (playing && currentSong === cancion.url) {
                pause();
              } else {
                play(cancion.url);
              }
            }}
          >
            {cancion.titulo} - {cancion.duracion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Album;
