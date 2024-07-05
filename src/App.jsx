import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./vista/Login";
import Register from "./vista/Resgister";
import Home from "./vista/Home";
import { AppProvider } from "./Contexto/AppContext";
import "./App.css";

function App() {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
