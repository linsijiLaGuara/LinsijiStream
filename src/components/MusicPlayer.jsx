// src/components/MusicPlayer.js
import React, { useRef, useEffect } from "react";
import IconsPly from "./Icons";

const MusicPlayer = ({ track }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (track) {
      audioRef.current.play();
    }
  }, [track]);

  const playTrack = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div>
      {track ? (
        <>
          <audio ref={audioRef} src={track.url} />
          <IconsPly onClick={playTrack}>Play</IconsPly>
          <IconsPly onClick={pauseTrack}>Pause</IconsPly>
          <div>Reproduciendo: {track.name}</div>
        </>
      ) : (
        <div>No hay pista seleccionada</div>
      )}
    </div>
  );
};

export default MusicPlayer;
