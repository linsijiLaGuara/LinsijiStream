import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";

const IconsPly = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleIconClick = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="icon-container" onClick={handleIconClick}>
      <FontAwesomeIcon
        icon={isPlaying ? faCirclePause : faCirclePlay}
        className="custom-icon"
      />
    </div>
  );
};
export default IconsPly;
