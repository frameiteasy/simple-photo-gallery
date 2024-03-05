import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Albums } from './components/Albums/Albums';
import { Gallery } from './components/Gallery/Gallery';
import { AppContext, AppDataType } from './AppContext';
import albumsData from './data/albums.json';

const initAppData = (): Array<Album> => {
  const albums = albumsData;
  return albums
};

function App() {
  console.log('App');
  const [context, setContext] = useState<AppDataType>({});

  const albums: Array<Album> = albumsData;

  useEffect(() => {
    setContext({albums: initAppData()});
  }, []);

  return (
    <AppContext.Provider value={{ context, setContext }}>
      <div id="app_container">
        <header id="app_header">
          <div id="app_header_title">Photo Gallery</div>
          <div id="app_header_subtitle">Konrad Marciniak</div>
        </header>
        <div id="app_content">
          <Routes>
            <Route path="/" element={<Albums albums={albums}/>}></Route>
            <Route path="/albums" element={<Albums albums={albums}/>}></Route>
            <Route path="/gallery/:albumName" element={<Gallery />}></Route>
          </Routes>
        </div>
        <div id="app_footer">footer</div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
