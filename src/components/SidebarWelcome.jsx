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
import LogoutButton from "../views/Logou";
function Sidebarwolcomen() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-menu">
        <div className="logo">
          <NavLink to="/welcome" className="navlink-style">
            <FontAwesomeIcon icon={faReplyAll} /> LinsijiStream
          </NavLink>
        </div>
        <div className="menu">
          <div className="menu-item">
            <NavLink to="/welcome" className="navlink-style">
              <FontAwesomeIcon icon={faHouseChimney} /> Inicio
            </NavLink>
          </div>
          <div className="menu-item">
            <NavLink to="/buscar" className="navlink-style">
              <FontAwesomeIcon icon={faMagnifyingGlass} /> Buscar
            </NavLink>
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
        <LogoutButton />
        <div className="empty-menu-color"></div>
      </div>
    </div>
  );
}

export default Sidebarwolcomen;
