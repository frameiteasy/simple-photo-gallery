import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Albums } from './components/Albums/Albums';
import { Gallery } from './components/Gallery/Gallery';
import { AppContext, AppDataType } from './AppContext';
import { useDataLoader } from './data/useDataLoader';

function App() {
  console.log('App');
  const {getAlbumsFile, getPhotosFile} = useDataLoader();

  const getAlbumId = (): string | undefined => {
    const galleryPath = window.location.href.split('/');
    const albumid = galleryPath.pop();
    return albumid;
  }

  const openGalleryViewer = (photos: Photo[], currentPhoto: number | undefined): JSX.Element => {
    console.log('openGalleryViewer', photos, currentPhoto);
    return (<div>Gallery Viewer</div>)
  }

  const [context, setContext] = useState<AppDataType>(
    {
      albums: getAlbumsFile(),
      getAlbums: getAlbumsFile, 
      getPhotos: getPhotosFile,
      openGallery: openGalleryViewer,
      getAlbumId
    }
  );

  return (
    <AppContext.Provider value={{ context, setContext }}>
      <div id="app_container">
        <header id="app_header">
          <div id="app_header_title">Photo Gallery</div>
          <div id="app_header_subtitle">Konrad Marciniak</div>
        </header>
        <div id="app_content">
          <Routes>
            <Route path="/" element={<Albums albums={getAlbumsFile()}/>}></Route>
            <Route path="/albums" element={<Albums albums={getAlbumsFile()}/>}></Route>
            <Route path="/gallery/:albumid" element={<Gallery />}></Route>
          </Routes>
          <div id="app_gallery_viewer">
            <span>&times;</span>
            <div id="photography"></div>
          </div>
        </div>
        <div id="app_footer">footer</div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
