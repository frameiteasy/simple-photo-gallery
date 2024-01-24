import { AlbumTile } from '../AlbumTile/AlbumTile';
import './Albums.css';
import { useAlbums } from './useAlbums';

/* TODO
    create an app context:
      - array of albums
      - arry of photos
    read a list of albums from the server and save in the context
*/

export const Albums = () => {
  const { openGallery } = useAlbums();
  return (
    <div id="albums_collection">
      <AlbumTile
        title="Album 1"
        description="This is album 1"
        cover="red"
        openGallery={openGallery}
      />
      <AlbumTile
        title="Album 2"
        cover="yellow"
        description="This is album 2"
        openGallery={openGallery}
      />
      <AlbumTile
        title="Album 3"
        cover="pink"
        description="This is album 3"
        openGallery={openGallery}
      />
      <AlbumTile
        title="Album 4"
        description="This is album 4"
        cover="green"
        openGallery={openGallery}
      />
      <AlbumTile
        title="Album 5"
        description="This is album 5"
        cover="blue"
        openGallery={openGallery}
      />
      <AlbumTile
        title="Album 6"
        description="This is album 6"
        cover="purple"
        openGallery={openGallery}
      />
      <AlbumTile
        title="Album 7"
        description="This is album 7 and many more words just to see how album tile looks like"
        cover="grey"
        openGallery={openGallery}
      />
      <AlbumTile title="Album 8" cover="black" openGallery={openGallery} />
    </div>
  );
};
