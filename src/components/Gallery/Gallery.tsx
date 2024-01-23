import { PhotoTile } from '../PhotoTile/PhotoTile';
import './Gallery.css';
import { useGallery } from './useGallery';

export const Gallery = () => {
  const { openSliderView } = useGallery();
  return (
    <div id="gallery">
      <PhotoTile title="Photo 1" file="pink" openSliderView={openSliderView} />
      <PhotoTile title="Photo 2" file="green" openSliderView={openSliderView} />
      <PhotoTile
        title="Photo 3"
        file="yellow"
        openSliderView={openSliderView}
      />
      <PhotoTile title="Photo 4" file="blue" openSliderView={openSliderView} />
      <PhotoTile
        title="Photo 5"
        file="orange"
        openSliderView={openSliderView}
      />
      <PhotoTile title="Photo 6" file="red" openSliderView={openSliderView} />
      <PhotoTile
        title="Photo 7"
        file="purple"
        openSliderView={openSliderView}
      />
      <PhotoTile title="Photo 8" file="grey" openSliderView={openSliderView} />
    </div>
  );
};
