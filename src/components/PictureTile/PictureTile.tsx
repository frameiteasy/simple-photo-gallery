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
    <div
      className="picture_tile"
      style={{ background: `url(${props.bcolor}) no-repeat center center / cover` }}
    />
  );
};