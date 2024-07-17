import React from 'react';
import Artist from './Artist';
import './ArtistContainer.css';

function ArtistContainer({ artists }) {
  return (
    <div className="artist-container">
      {artists.map((artist) => (
        <Artist key={artist.name} name={artist.name} image={artist.image} />
      ))}
    </div>
  );
}

export default ArtistContainer;
