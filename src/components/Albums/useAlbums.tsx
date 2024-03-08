import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type ReturnUseAlbumsType = {
  openGallery: (albumid: number) => void
};

export const useAlbums = (): ReturnUseAlbumsType => {
  const openGallery = (albumid: number): void => {

    console.log('open gallery ', albumid);
    // onClick={() => navigate(galleryUrl)}
  };

  return {
    openGallery
  };
};
