import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import Artist from "./Artist";
import "./MainContent.css";
import shakira from "../assets/img/shakira.jpeg";
import duaLipa from "../assets/img/dua_lipa.jpeg";
import daddy_yankee from "../assets/img/daddy_yankee.jpeg";
import Romeo_Santos from "../assets/img/romeo_santos.jpeg";

function MainContent() {
  return (
    <div className="main-content">
      <div className="icon-f">
        <FontAwesomeIcon className="icon-fa" icon={faBackward} />
        <FontAwesomeIcon className="icon-fa" icon={faForward} />
      </div>

      <div className="artists-title">Artistas</div>
      <div className="artists">
        <Artist name="Shakira" image={shakira} />
        <Artist name="Dua Lipa" image={duaLipa} />
        <Artist name="Daddy Yankee" image={daddy_yankee} />
        <Artist name="Romeo Santos" image={Romeo_Santos} />
      </div>
    </div>
  );
}

export default MainContent;
