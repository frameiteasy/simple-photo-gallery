import { PhotoTile } from '../PhotoTile/PhotoTile';
import './Gallery.css';

export const Gallery = () => {
  return (
    <div id="gallery">
      <PhotoTile title="Photo 1" />
      <PhotoTile title="Photo 2" />
      <PhotoTile title="Photo 3" />
      <PhotoTile title="Photo 4" />
      <PhotoTile title="Photo 5" />
      <PhotoTile title="Photo 6" />
      <PhotoTile title="Photo 7" />
      <PhotoTile title="Photo 8" />
    </div>
  );
};
