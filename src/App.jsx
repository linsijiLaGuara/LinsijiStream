import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Headar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-section">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
