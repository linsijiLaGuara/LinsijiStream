import React, { useState } from "react";
import IconsPly from "./Icons";
import "./Artist.css";

function Artist({ name, image }) {
  return (
    <div className="artist">
      <img src={image} alt={name} className="artist-image" />
      <IconsPly />
      <div className="artist-name">{name}</div>
    </div>
  );
}

export default Artist;
