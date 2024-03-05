type ReturnUseGalleryViewerType = {
    openGallery: (photos: Array<Photo>, index: number) => void;
  };
  
  export const useGalleryViewer = (): ReturnUseGalleryViewerType => {
    const openGallery = (photos: Array<Photo>, index: number): void => {
      console.log('open gallery viewer', photos, index);
    };
  
    return {
      openGallery,
    };
  };