import { useNavigate } from 'react-router-dom';
import { PictureTile } from '../PictureTile/PictureTile';
import './AlbumTile.css';

type AlbumTileProps = {
  id: number,
  title: string;
  photos: string;
  description?: string;
  date?: string;
  cover?: string;
};

export const AlbumTile = (props: AlbumTileProps) => {
  const navigate = useNavigate();
  const galleryUrl = '/gallery/' + props.photos;

  return (
    <div className="album_tile" onClick={() => navigate(galleryUrl)}>
      <PictureTile bcolor={props.cover} />
      <div className="album_info">
        <div className="album_name">{props.title}</div>
        <div className="album_date">{props.date}</div>
        <div className="album_description">{props.description}</div>
      </div>
    </div>
  );
};
