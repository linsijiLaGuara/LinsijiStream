import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const IconsBackward = () => {
  return (
    <div className="icon-container-pagination">
      <FontAwesomeIcon icon={faBackward} className="custom-icon-pag" />
    </div>
  );
};
export default IconsBackward;
