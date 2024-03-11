import { Dispatch, SetStateAction, useCallback } from 'react';
import photosFile from './photos.json';
import albumsFile from './albums.json';
const albumsServer: string | undefined = process.env.REACT_APP_SERVER;

type UseDataLoaderReturnType = {
  getAlbums: () => void;
  getAlbumsFile: () => Album[];
  getPhotosFile: (albumid: string | undefined) => Photo[];
};

export const useDataLoader = (): UseDataLoaderReturnType => {

  const getAlbums = useCallback(async () => {
    try {
      const response = await fetch(`${albumsServer}/albums`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      // setAlbums(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getAlbumsFile = (): Album[] => {
    const albums: Album[] = albumsFile;
    console.log('albums', albums);
    return albums;
  }

  const buildPhotosMap = (): Map<string, Photo[]> => {
    const photosMap = new Map();

    for (const item of photosFile) {
      photosMap.set(item.albumid, item.photos);
    }

    return photosMap;
  }

  const getPhotosFile = (albumid: string | undefined): Photo[] => {
    if (albumid === undefined) {
      return []
    }

    const photosMap = buildPhotosMap();
    let photos: Photo[] | undefined = photosMap.get(albumid);;
   
    if (photos !== undefined) {
      return photos
    }

    return [];
  }

  return {
    getAlbums,
    getAlbumsFile,
    getPhotosFile
  };
};
