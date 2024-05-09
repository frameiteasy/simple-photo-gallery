import { Dispatch, SetStateAction } from 'react';
import './PhotoTile.css';
import { PictureTile } from '../PictureTile/PictureTile';
import { useDataLoader } from '../../data/useDataLoader';


/*
  When click on the tile the slider view is open with the current photo
  and the user can go forth and back
*/

type PhotoTileProps = {
  id: number;
  file: string;
  title?: string;
  date?: string;
  description?: string;
  openSliderView: Dispatch<SetStateAction<boolean>>;
  // setCurrentPhotoId: Dispatch<SetStateAction<number>>;
  setCurrentPhotoId: (newId: number) => void;
};

export const PhotoTile = (props: PhotoTileProps) => {
const { getSmallPhoto } = useDataLoader();
console.log('photo path', getSmallPhoto(props.file));

  return (
    <div
      className="photo_tile"
      onClick={() => {console.log('click on photo', props.id); props.setCurrentPhotoId(props.id); props.openSliderView(true)}}
    >
      <PictureTile bcolor={getSmallPhoto(props.file)} />
      <div className="photo_info">
        <div className="photo_title">{props.title}</div>
        <div className="photo_date">{props.date}</div>
        <div className="photo_description">{props.description}</div>
      </div>
    </div>
  );
};
