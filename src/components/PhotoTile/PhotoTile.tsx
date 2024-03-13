import {Dispatch, SetStateAction} from 'react';
import './PhotoTile.css';
import { PictureTile } from '../PictureTile/PictureTile';

/*
  When click on the tile the slider view is open with the current photo
  and the user can go forth and back
*/

type PhotoTileProps = {
  file: string;
  title?: string;
  date?: string;
  description?: string;
  openSliderView: Dispatch<SetStateAction<boolean>>;
};

export const PhotoTile = (props: PhotoTileProps) => {
  return (
    <div
      className="photo_tile"
      onClick={() => {console.log('click'); props.openSliderView(true)}}
    >
      <PictureTile bcolor={props.file} />
      <div className="photo_info">
        <div className="photo_title">{props.title}</div>
        <div className="photo_date">{props.date}</div>
        <div className="photo_description">{props.description}</div>
      </div>
    </div>
  );
};
