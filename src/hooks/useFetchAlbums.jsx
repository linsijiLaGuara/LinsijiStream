import { useState } from 'react';

const useFetchAlbums = () => {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    // Lógica para obtener los álbumes
    const data = await fetch('/api/albums').then(res => res.json());
    setAlbums(data);
  };

  return { albums, fetchAlbums };
};

export default useFetchAlbums;