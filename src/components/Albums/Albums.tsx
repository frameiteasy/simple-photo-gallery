import { AlbumTile } from '../AlbumTile/AlbumTile';
import './Albums.css';
import { useAlbums } from './useAlbums';

/* TODO
    create an app context:
      - array of albums
      - arry of photos
    read a list of albums from the server and save in the context
*/

type AlbumsProps = {
  albums: Album[];
};

export const Albums = (props: AlbumsProps) => {
  const { openGallery } = useAlbums();
  const { albums } = props;

  const albumTiles = albums.map((item, index) => {
    return (
      <AlbumTile 
        id={item.id}
        key={item.id}
        title={item.title}
        description={item.description}
        cover={item.cover}
        openGallery={openGallery}/>
    )
  })

  return (
    <div id="albums_collection">
      {albumTiles}
    </div>
  );
};
