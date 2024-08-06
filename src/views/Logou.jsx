
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { AppContext } from "../contexts/AppContext";

const LogoutButton = () => {
  const { logOut } = useContext(AppContext);

  return (
    <Button variant="danger" onClick={logOut} className="custom-cerrar-button">
      Cerrar sesión
    </Button>
  );
};

export default LogoutButton;
