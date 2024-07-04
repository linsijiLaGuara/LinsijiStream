import React, { useState } from "react";
import "./Artist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";

function Artist({ name, image }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleIconClick = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="artist">
      <img src={image} alt={name} />{" "}
      <div className="icon-container" onClick={handleIconClick}>
        <FontAwesomeIcon
          icon={isPlaying ? faCirclePause : faCirclePlay}
          className="custom-icon"
        />
      </div>
      <div className="artist-name">{name}</div>
    </div>
  );
}

export default Artist;
