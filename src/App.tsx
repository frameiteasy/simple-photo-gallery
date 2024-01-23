import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Albums } from './components/Albums/Albums';
import { Gallery } from './components/Gallery/Gallery';

function App() {
  return (
    <div id="app_container">
      <header id="app_header">
        <div id="app_header_title">Photo Gallery</div>
        <div id="app_header_subtitle">Konrad Marciniak</div>
      </header>
      <div id="app_content">
        <Routes>
          <Route path="/" element={<Albums />}></Route>
          <Route path="/albums" element={<Albums />}></Route>
          <Route path="/gallery/:albumName" element={<Gallery />}></Route>
        </Routes>
      </div>
      <div id="app_footer">footer</div>
    </div>
  );
}

export default App;
