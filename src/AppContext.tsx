import { createContext, useContext } from 'react';

export type AppDataType = {
  albums: Album[];
  getAlbumId: () => string | undefined;
  getAlbums: () => Album[];
  getPhotos: (albumid: string | undefined) => Photo[];
};

export type AppContextType = {
  context: AppDataType;
  setContext?: (c: AppDataType) => void;
};

export const AppContext = createContext<AppContextType>(
  {context: {
    albums: [],
    getAlbumId: () => undefined,
    getAlbums: () => [],
    getPhotos: (undefined) => []
  }});

export const useAppContext = () => useContext(AppContext);
