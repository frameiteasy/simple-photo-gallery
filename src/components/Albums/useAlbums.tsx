type ReturnUseAlbumsType = {
  openGallery: (galleryName: string) => void;
  createKey: (index: number, title: string) => string;
};

export const useAlbums = (): ReturnUseAlbumsType => {
  const openGallery = (galleryName: string): void => {
    console.log('open gallery ', galleryName);
  };

  const createKey = (index: number, title: string): string => {
    return index + title.replace(/\s+/g, '');
  }

  return {
    openGallery,
    createKey
  };
};
