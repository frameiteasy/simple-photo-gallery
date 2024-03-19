import { useState } from 'react';
import { useAppContext } from '../../AppContext';
import { PhotoTile } from '../PhotoTile/PhotoTile';
import { PopupWindow } from '../PopupWindow/PopupWindow';
import './Gallery.css';
import { GalleryViewer } from '../GalleryViewer/GalleryViewer';

/*
  List of photos from the specific album
  Click on photo open view slider
  Close slider and you are back here
*/

export const Gallery = () => {
  const { context } = useAppContext();
  // const { openSliderView } = useGallery();
  // const { getPhotos} = useGallery();
  const albumid: string | undefined = context.getAlbumId();

  const photos: Photo[] | undefined = context.getPhotos(albumid);
  const [visibility, setVisibility] = useState(false);
  const [currentPhotoId, setCurentPhotoId] = useState<number>(0);

  const photoTiles = photos?.map((item, index) => {
    // console.log('tile', context.openGallery(photos, index));
    return (
      <PhotoTile 
        id={index}
        key={index}
        title={item.title}
        description={item.description}
        file={item.file}
        openSliderView={setVisibility}
        setCurrentPhotoId={setCurentPhotoId}
      />
    )
  });

  return (
    <div id="gallery">
      {photoTiles}
      <PopupWindow isVisible={visibility} setVisibility={setVisibility}>
        <GalleryViewer photos={photos} index={currentPhotoId}/>
      </PopupWindow>
    </div>
  );
};
