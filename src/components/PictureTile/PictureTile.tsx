import './PictureTile.css';

type PictureTileProps = {
  mini_file?: string;
  big_file?: string;
  title?: string;
  date?: string;
  description?: string;
  bcolor?: string;
};

export const PictureTile = (props: PictureTileProps) => {
  return (
    // set photo image as the background
    <div
      className="picture_tile"
      style={{ backgroundColor: `${props.bcolor}` }}
    />
    // <div className="picture_tile" />
  );
};
