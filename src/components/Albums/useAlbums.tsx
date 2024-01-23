type ReturnUseAlbumsType = {
  openGallery: (galleryName: string) => void;
};

export const useAlbums = (): ReturnUseAlbumsType => {
  const openGallery = (galleryName: string): void => {
    console.log('open gallery ', galleryName);
  };

  return {
    openGallery,
  };
};
