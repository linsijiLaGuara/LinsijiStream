import { useState } from "react";
import albums_mockup from "../mockupServices/albumList.json";
const useFetchAlbums = () => {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    // Lógica para obtener los álbumes
    //const data = await fetch('/api/albums').then(res => res.json());
    setAlbums(albums_mockup);
  };

  return { albums, fetchAlbums };
};

export default useFetchAlbums;
