import React, { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import useFetchAlbums from '../hooks/useFetchAlbums';

const AlbumList = () => {
  const { state, setState } = useContext(AppContext);
  const { albums, fetchAlbums } = useFetchAlbums();

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div className="album-list">
      {albums.map(album => (
        <div key={album.id} className="album">
          <img src={album.image} alt={album.title} />
          <p>{album.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;