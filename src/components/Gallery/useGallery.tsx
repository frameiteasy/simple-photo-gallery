import photosArray from '../../data/photos.json';

type ReturnUseGalleryType = {
  openSliderView: (photoFile: string) => void
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

  return {
    openSliderView
  };
};
