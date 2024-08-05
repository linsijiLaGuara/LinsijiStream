import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";

const IconsForward = () => {
  return (
    <div className="icon-container-pagination">
      <FontAwesomeIcon icon={faForward} className="custom-icon-pag" />
    </div>
  );
};
export default IconsForward;
