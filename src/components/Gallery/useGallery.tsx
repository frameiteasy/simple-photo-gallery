import photosArray from '../../data/photos.json';

type ReturnUseGalleryType = {
  openSliderView: (photoFile: string) => void;
  getPhotos: () => Photo[] | undefined;
};

export const useGallery = (): ReturnUseGalleryType => {
  const createPhotosMap = (): Map<string, Photo[]> => {
    const photosMap = new Map();

    for (const item of photosArray) {
      photosMap.set(item.albumid, item.photos);
    }

    return photosMap;
  }

  const openSliderView = (photoFile: string): void => {
    console.log('open slider view ', photoFile);
  };

  const getPhotos = (): Photo[] | undefined => {
    const galleryPath = window.location.href.split('/');
    const albumid = galleryPath.pop();
    const photosMap = createPhotosMap();
    let photos: Photo[] | undefined = [];
    if (albumid !== undefined) {
      photos = photosMap.get(albumid);
    } else {
      photos = [];
    }

    return photos;
  }

  return {
    openSliderView,
    getPhotos
  };
};
