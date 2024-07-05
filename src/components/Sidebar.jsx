import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faReplyAll,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import { ImBooks } from "react-icons/im";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-menu">
        <div className="logo">
          <NavLink to="/" className="navlink-style">
            <FontAwesomeIcon icon={faReplyAll} /> LinsijiStream
          </NavLink>
        </div>
        <div className="menu">
          <div className="menu-item">
            <NavLink to="/" className="navlink-style">
              <FontAwesomeIcon icon={faHouseChimney} /> Inicio
            </NavLink>
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
            <p className="text-crear">Es muy fácil, y te echaremos una mano.</p>
          </div>
        </div>
      </div>
      <div className="empty-menu">
        <div className="empty-menu-color"></div>
      </div>
    </div>
  );
}

export default Sidebar;
