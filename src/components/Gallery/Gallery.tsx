import { useAppContext } from '../../AppContext';
import { PhotoTile } from '../PhotoTile/PhotoTile';
import './Gallery.css';
import { useGallery } from './useGallery';

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

  const photoTiles = photos?.map((item, index) => {
    console.log('tile', context.openGallery(photos, index));
    return (
      <PhotoTile 
        key={index}
        title={item.title}
        description={item.description}
        file={item.file}
        openSliderView={context.openGallery(photos, index)}
      />
    )
  });

  return (
    <div id="gallery">
      {photoTiles}
    </div>
  );
};
