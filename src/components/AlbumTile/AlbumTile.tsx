import { PictureTile } from '../PictureTile/PictureTile';
import './AlbumTile.css';

type AlbumTileProps = {
  title: string;
  description?: string;
  date?: string;
  openGallery: (galleryName: string) => void;
};

export const AlbumTile = (props: AlbumTileProps) => {
  return (
    <div className="album_tile" onClick={() => props.openGallery(props.title)}>
      <PictureTile />
      <div className="album_info">
        <div className="album_name">{props.title}</div>
        <div className="album_date">{props.date}</div>
        <div className="album_description">{props.description}</div>
      </div>
    </div>
  );
};
