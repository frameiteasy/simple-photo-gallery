import './PhotoTile.css';
import { PictureTile } from '../PictureTile/PictureTile';

type PhotoTileProps = {
  mini_file?: string;
  big_file?: string;
  title?: string;
  date?: string;
  description?: string;
};

export const PhotoTile = (props: PhotoTileProps) => {
  return (
    <div className="photo_tile">
      <PictureTile />
      <div className="photo_info">
        <div className="photo_title">{props.title}</div>
        <div className="photo_date">{props.date}</div>
        <div className="photo_description">{props.description}</div>
      </div>
    </div>
  );
};
