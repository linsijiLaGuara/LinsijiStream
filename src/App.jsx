import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Resgister";
import Home from "./views/Home";
import Welcome from "./views/Welcome"; // Asegúrate de importar el componente con el nombre correcto
import { AppProvider } from "./contexts/AppContext";
import "./App.css";

function App() {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} /> {/* Usa el nombre correcto del componente */}
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
