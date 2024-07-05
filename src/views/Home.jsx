import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

export default function Home() {
  const { user } = useContext(AppContext);

  return (
    <>
      <Header />
      <div className="app">
        <Sidebar />
        <div className="main-section">
          <MainContent />
        </div>
      </div>
    </>
  );
}
