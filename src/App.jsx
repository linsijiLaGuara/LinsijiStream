import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Resgister";
import Home from "./views/Home";
import Welcome from "./views/Welcome";
import Search from "./views/Search";
import { AppProvider } from "./contexts/AppContext";
import "./App.css";

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/welcome"
            element={<Welcome setCurrentTrack={setCurrentTrack} />}
          />
          <Route
            path="/buscar"
            element={<Search setCurrentTrack={setCurrentTrack} />}
          />
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
