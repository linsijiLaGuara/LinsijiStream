import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faReplyAll,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import { ImBooks } from "react-icons/im";

function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-menu">
          <div className="logo">
            <FontAwesomeIcon icon={faReplyAll} />LinsijiStream
          </div>
          <div className="menu">
            <div className="menu-item">
              <FontAwesomeIcon icon={faHouseChimney} /> Inicio
            </div>
            <div className="menu-item">
              <FontAwesomeIcon icon={faMagnifyingGlass} /> Buscar
            </div>
          </div>
        </div>
        <div className="library">
          <div className="library-title">
            <div className="library-icons">
              <ImBooks /> Biblioteca
            </div>

            <div className="library-item">
              <div>Crea tu lista</div>
              <p className="text-crear">Es muy facil, y te de crear </p>
            </div>
          </div>
        </div>
        <div className="empty-menu">
          <div className="empty-menu-color"></div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
