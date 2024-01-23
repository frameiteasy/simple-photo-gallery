type ReturnUseGalleryType = {
  openSliderView: (photoFile: string) => void;
};

export const useGallery = (): ReturnUseGalleryType => {
  const openSliderView = (photoFile: string): void => {
    console.log('open slider view ', photoFile);
  };

  return {
    openSliderView,
  };
};
